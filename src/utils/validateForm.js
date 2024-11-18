import { mixed, object, string } from "yup"

let userSchema = object({
  fullname: string().required("El nombre es requerido"),
  phone: mixed().required("El telefono es requerido"),
  email: string().email("El mail debe tener @")
})

const validateForm = async(dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm