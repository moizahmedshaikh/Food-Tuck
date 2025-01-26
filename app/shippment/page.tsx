"use client";

import { useState } from "react";
import axios from "axios";
import { Address, Rate, trackingObjType } from "../../type";
import { cartProductsWhichCanBeShipped } from "../../data";
import Link from "next/link";
import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";

const Checkout = () => {
  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "",
    phone: "",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "", // Optional
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no", // 'no' means a commercial address
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Function to handle form submission of shipping rates
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        // map the cart products which can be shipped and use only weight and dimensions
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });
      // see the response in browser
      console.log(response.data);
      // Update the state with the fetched rates
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  // Function to create label from selected rate
  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
    }

    setLoading(true);
    setErrors([]);

    try {
      // get rateId which user selected
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;
      // see the response of label in browser
      console.log(labelData);
      // set pdf url
      setLabelPdf(labelData.labelDownload.href);
      // set tracking obj
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Shipping Page" url1="Home" url2="Shipping" />

      <div className="max-w-[1000px] text-[#333333] mx-auto md:px-12 px-8 py-16">
        
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl text-center font-[500]">Shipping Details</h1>
          
          <div className=" lg:gap-32 md:gap-20 gap-12 pt-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={shipeToAddress.name}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      name: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="streetAddress" className="text-gray-400">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  value={shipeToAddress.addressLine1}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      addressLine1: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="streetAddress" className="text-gray-400">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="Address Line 2"
                  value={shipeToAddress.addressLine2}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      addressLine2: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-400">
                  Town/City
                </label>
                <input
                  type="text"
                  placeholder="City"
                  value={shipeToAddress.cityLocality}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      cityLocality: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-400">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  value={shipeToAddress.phone}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      phone: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-400">
                  State
                </label>
                <input
                  type="text"
                  placeholder="State/Province"
                  value={shipeToAddress.stateProvince}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      stateProvince: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-400">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={shipeToAddress.postalCode}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      postalCode: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-400">
                  Country Code
                </label>
                <input
                  type="text"
                  placeholder="Country Code (e.g., PK)"
                  value={shipeToAddress.countryCode}
                  onChange={(e) =>
                    setshipeToAddress({
                      ...shipeToAddress,
                      countryCode: e.target.value,
                    })
                  }
                  className="p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
              >
                {loading ? "Calculating..." : "Get Shipping Rates"}
              </button>
            </div>

            {/* Right section */}
            
          </div>
        </form>
        {/* Display Available Rates */}
        {rates.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">
              Available Shipping Rates
            </h2>
            <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {rates.map((rate) => (
                <div
                  key={rate.rateId}
                  className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
                    rateId === rate.rateId
                      ? "border-blue-500 bg-blue-100"
                      : "border-gray-200 bg-gray-50"
                  }`}
                  onClick={() => setrateId(rate.rateId)}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="shippingRate"
                      checked={rateId === rate.rateId}
                      onChange={() => setrateId(rate.rateId)}
                      className="form-radio h-4 w-4 text-blue-500"
                    />
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        <strong>Carrier:</strong> {rate.carrierFriendlyName}
                      </p>
                      <p className="text-gray-600">
                        <strong>Service:</strong> {rate.serviceType}
                      </p>
                      <p className="text-gray-800 font-semibold">
                        <strong>Cost:</strong> {rate.shippingAmount.amount}{" "}
                        {rate.shippingAmount.currency}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Create Label Button */}
        {rateId && (
          <div className="my-8">
            <button
              onClick={handleCreateLabel}
              disabled={loading}
              className="w-full px-4 py-2 bg-[#DB4444] hover:bg-[#a82929] text-white rounded-md  disabled:bg-gray-400"
            >
              {loading ? "Creating Label..." : "Create Label"}
            </button>
          </div>
        )}
        {labelPdf && (
          <Link target="_blank" href={labelPdf} className="flex justify-center">
            {" "}
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Download Label
            </button>
          </Link>
        )}
        {trackingObj && (
          <div className="mt-8 flex justify-center">
            <div>
              <h2 className="text-xl text-center font-semibold text-gray-800 mb-4">
                Tracking thinks <br /> (We are using ShipEngine test api key so
                order will not trace)
              </h2>
              <p className="text-center">
                tracking number: {trackingObj.trackingNumber}
              </p>
              <p className="text-center"> labelId: {trackingObj.labelId}</p>
              <p className="text-center">
                {" "}
                carrierCode: {trackingObj.carrierCode}
              </p>
              <Link
                href={`/tracking/?labelId=${trackingObj.labelId}`}
                className="flex justify-center mt-5"
              >
                <button className="px-4 py-2 bg-[#DB4444] hover:bg-[#a82929] text-white rounded-md ">
                  Track Order
                </button>
              </Link>
            </div>
          </div>
        )}
        {errors.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Errors</h2>
            <div className="space-y-2">
              {errors.map((error, index) => (
                <p key={index} className="text-red-500">
                  {error}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
