export type FormField = {
  id: string;
  label: string;
  type: "text" | "url" | "number" | "date";
  placeholder: string;
  required: boolean;
  step?: string;
  min?: string;
  max?: string;
};
