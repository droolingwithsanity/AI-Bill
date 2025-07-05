import { faker } from '@faker-js/faker';
export const generateFakeUsers = (n = 5) => Array.from({ length: n }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  verified: faker.datatype.boolean()
}));
export const generateFakeBills = (userId, n = 5) => Array.from({ length: n }, () => ({
  id: faker.string.uuid(),
  userId,
  description: faker.commerce.productName(),
  amount: parseFloat(faker.finance.amount(20, 500)),
  dueDate: faker.date.soon().toISOString()
}));
