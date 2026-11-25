export interface Order {
  id: string,
  userId: string,

  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled',
}
