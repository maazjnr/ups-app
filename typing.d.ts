type Customer = {
    email: string
    name: string
}

type CustomerList = {
    name: ID;
    value: Customer;
}

type Item = {
    item_id: ID;
    name: string
    price: number
    quantity: number
}

type TrackingItem = {
    customer_id: ID;
    Customer: Customer;
    items: Item[]
}

type OrderResponse = {
    value: Order
}

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type Order = {
    carriers: String
    createAt: Date
    shippingCost: Int
    trackingId: String
    Address: String
    City: String
    Lat: number
    Lng: number
    trackingItems: TrackingItems
}