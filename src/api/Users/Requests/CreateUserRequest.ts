export const rules = {
  username: {
    type: String,
    required: true,
    length: { min: 3, max: 32 },
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      match: /^[0-9]+$/,
      required: true,
    },
  },
}
