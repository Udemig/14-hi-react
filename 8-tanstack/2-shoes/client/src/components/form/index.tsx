import { Form, Formik } from "formik";
import type { FC } from "react";
import { INPUT_ARRAY } from "../../constants";
import FormField from "./form-field";
import type { Product, ProductValues } from "../../types";

interface Props {
  mutate: (data: any) => void;
  isPending: boolean;
  data?: Product;
}

const ProductForm: FC<Props> = ({ mutate, isPending, data }) => {
  const initialValues: ProductValues = {
    name: "",
    price: 0,
    discount: 0,
    color: "",
    size: "",
    description: "",
    isNew: false,
    gender: "men",
  };

  const handleSubmit = (values: ProductValues) => {
    // mutasyon api isteği at
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-5">
        {INPUT_ARRAY.map((input) => (
          <FormField {...input} />
        ))}

        <button
          disabled={isPending}
          type="submit"
          className="bg-my-blue py-1 px-4 rounded-md text-white hover:bg-my-blue/80"
        >
          Gönder
        </button>
      </Form>
    </Formik>
  );
};

export default ProductForm;
