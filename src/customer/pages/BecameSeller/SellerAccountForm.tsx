import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import BecameSellerFormStep1 from "./BecameSellerFormStep1";
import { useFormik, validateYupSchema } from "formik";
import { Password } from "@mui/icons-material";
import * as Yup from "yup"
import BecameSellerFormStep2 from "./BecameSellerStep2";
import BecameSellerFormStep3 from "./BecameSellerStep3";
import BecameSellerFormStep4 from "./BecameSellerStep4";
import BecameSellerStep3 from "./BecameSellerStep3";

const AddressFormSchema =Yup.object().shape({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string().required("Mobile number is required").matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  pinCode: Yup.string().required("Pin code is required").matches(/^[1-9][0-9]{5}$/, "Invalid pin code"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  locality: Yup.string().required("Locality is required"),
    GSTIN: Yup.string().required('GSTIN is required')
})


const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleStep =(value:number)=> () => {
    
 (  value == -1 || activeStep <steps.length-1) && setActiveStep(activeStep + value);
    activeStep ==steps.length-1 &&handleCreateAccount();
    console.log("ACTIVE STEP ==" ,activeStep)
  };

  const handleCreateAccount =()=>{
console.log("Account created Sucessfully",activeStep)
  }

//   user formik hook
const formik = useFormik({
    initialValues: {
      mobile: "",
      otp: "",
      GSTIN: "",
      pickupAddress: {
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        locality: "",
        city: "",
        state: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
        sellerName: "",
        email: "",
      },
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        logo: "",
        banner: "",
        businessAddress: "",
      },
      password: "",
    },
    // validationSchema: AddressFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  
  
//    activeStep==steps.length-2 && 
  
  return (
    <div className="space-y-3">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="space-y-3">


        <div className="mt-20 space-y-5 ">
        {activeStep == 0? <BecameSellerFormStep1 formik={formik}/> : ""}
        {activeStep == 1? <BecameSellerFormStep2 formik={formik}/> : ""}
        {activeStep == 2? <BecameSellerStep3 formik={formik}/> : ""}
        {activeStep == 3? <BecameSellerFormStep4 formik={formik}/> : ""}

        </div>
       
        <div className="flex items-center justify-between">
        <Button
          onClick={  handleStep(-1)}
          variant="contained"
          disabled={activeStep == 0}
        >Back</Button>
        <Button
        type="submit"
    onClick={handleStep(1)}
          variant="contained"
          
        >{activeStep==steps.length-1?"Create Account":"Continue"}</Button>
      </div>

      </section>

      
    </div>
  );
};

export default SellerAccountForm;
