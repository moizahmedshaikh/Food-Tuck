
// Define types for the API response
export type Address = {
    name: string;
    phone: string;
    addressLine1: string;
    addressLine2?: string;
    cityLocality: string;
    stateProvince: string;
    postalCode: string;
    countryCode: string;
    addressResidentialIndicator: "yes" | "no";
  };
  export type unit = "ounce" | "gram" | "kilogram" | "pound";
  export type dimensionUnit = "inch" | "centimeter";
  
  export type Package = {
    weight: {
      value: number;
      unit: unit;
    };
    dimensions: {
      height: number;
      width: number;
      length: number;
      unit: dimensionUnit;
    };
  };
  
  export type Rate = {
    rateId: string;
    rateType: string;
    carrierId: string;
    shippingAmount: {
      currency: string;
      amount: number;
    };
    serviceType: string;
    serviceCode: string;
    trackable: boolean;
    carrierFriendlyName: string;
    validationStatus: string;
    warningMessages?: string[];
  };
  
  
  export interface trackingObjType {
    trackingNumber: string;
    labelId: string;
    carrierCode: string;
  }
  
  export interface TrackingData {
    trackingNumber?: string;
    statusDescription?: string;
    carrierStatusDescription?: string;
    estimatedDeliveryDate?: string;
    actualDeliveryDate?: string;
  }
  





  export interface simplifiedProduct {
    images: string[],
    _id: string,
    name: string,
    price: number,
    slug: string,
    category: string,
    imageUrl: string,
    hoverImageUrl:string
}

export interface fullProduct {
    _id: string,
    images: string[],
    name: string,
    description: string,
    slug: string,
    category: string
    price: number,
    product_id: string
}
export interface formData{
    name:string,
    phone:string,
    email:string,
    address:string,
    city:string,
}