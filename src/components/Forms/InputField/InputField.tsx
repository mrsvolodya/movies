import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../types/FormValues";

type InputProps = {
  id: keyof FormValues;
  textLabel: string;
  type: string;
  register: UseFormRegister<FormValues>;
  placeholder?: string;
  step?: number;
  min?: number;
  max?: number;
};

export function InputField({
  id,
  textLabel,
  type,
  register,
  placeholder,
  step,
  min,
  max,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm">
        {textLabel}
      </label>
      <input
        id={id}
        min={min}
        max={max}
        step={step}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 bg-gray-800 rounded"
        {...register(id, { required: true })}
      />
    </div>
  );
}
