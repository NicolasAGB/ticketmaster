import { useForm } from "react-hook-form";

export const SingupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleSubmitForm = (data) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="">
        {" "}
        name
        <input {...register("name", { required: true })} />
        <br />
      </label>
      <label htmlFor="">Age</label>
      <input {...register("age", { required: true })} required />
      <br />
      <label htmlFor="">
        Address
        <input {...register("address", { required: true })} required />
        <br />
      </label>
      <label htmlFor="">
        Zip code
        <input {...register("zipcode", { required: true })} required />
        <br />
      </label>
      <label htmlFor="">
        Phone
        <input {...register("phone", { required: true })} required />
        <br />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Subtmit</button>
      </div>
    </form>
  );
};


