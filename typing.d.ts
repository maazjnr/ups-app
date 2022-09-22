type Customer = {
    email: string
    name: string
}

type CustomerList = {
    name: ID;
    value: Customer;
}

type Item = {
    item_id: 10;
    name: string
    price: number
    quantity: number
}

type OrderResponse = {
    value: Order
}

type Order = {
    carriers: String
    createAt: Date
    shippingCost: Int
    trackingId: String
    Address: String
    City: String
    Lat: Number
    Lng: Number
    trackingItems: TrackingItems
}