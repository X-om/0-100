import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const userSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().min(1,{message : 'email is required'}).email({ message: 'Invalid email address' }),
  password: z
    .string()
    .regex(/[A-Z]/, { message: 'Must contain at least one uppercase letter' })
    .regex(/[a-z]/, { message: 'Must contain at least one lowercase letter' })
    .regex(/[0-9]/, { message: 'Must contain at least one number' })
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
        noValidate
      >
        <h1 className="text-xl font-bold mb-4 text-center">Register</h1>


        <div className="mb-4">
        {console.log("name")}
          <label className="block mb-1 font-semibold">Name</label>
          <input
            {...register('name')}
            placeholder="Enter your name"
            className={`w-full p-2 border rounded ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>


        <div className="mb-4">
        {console.log("email")}
          <label className="block mb-1 font-semibold">Email</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
            className={`w-full p-2 border rounded ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>


        <div className="mb-6">
        {console.log("password")}
          <label className="block mb-1 font-semibold">Password</label>
          <input
            {...register('password')}
            type="password"
            placeholder="Enter your password"
            className={`w-full p-2 border rounded ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};




export default UserForm;
