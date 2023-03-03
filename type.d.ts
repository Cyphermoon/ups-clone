type customerType = {
    name: string,
    email: string,
}

type customerListType = {
    name: ID,
    value: customerType
}

type TrackingItemList = {
    customer_id: string;
    items: Item[];
    customer: Customer;
  }

  type Items = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number;
  }
  
  type Customers = {
    name: string;
    email: string;
  }

  type CustomerResponse = {
    name: ID
    value: Customers
  }

  type OrderResponse = {
    value: Order
  }

  type Order = {
    carrier: string;
    createdAt: Date;
    shippingCost: number;
    trackingId: string;
    address: string;
    Lat: number;
    Lng: number;
    trackingItems: TrackingItemList;
    city: string
  }
    