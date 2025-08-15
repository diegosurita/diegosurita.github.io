import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    description: 'Manage website users and administrators',
  },
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<p>Please verify your email by clicking the link below:</p>
        <a href="${process.env.PAYLOAD_PUBLIC_SERVER_URL}/verify/${token}">Verify Email</a>`
      },
    },
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'user',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
    },
  ],
}
