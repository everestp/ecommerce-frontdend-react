import {
  Box,
  Button,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import { Height } from "@mui/icons-material";
import PricingCard from "../Cart/PricingCard";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const paymentGatwayList = [
  {
    value: "ESEWA",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp",
    label: "",
  },
  {
    value: "KHALTI",
    image:
      "https://encdn.ratopati.com/media/news/khalti_ELEhMcPi9q_8KQHgO7gag.png",
    label: "",
  },
];
const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paymentGateWay,setPaymentGateWay]=useState("ESEWA")

  const hadlePaymentChange =(event:any)=>{
    setPaymentGateWay(event.target.value)
  };
  return (
    <>
      <div className="pt-10 px-5 sm:px-10 md:px-44 g:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0  lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Select Address</h1>
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Saved Addresses</p>
              <div className="space-y-5">
                {[1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>
            <div className="py-4 px-5 rounded-md border">
              <Button onClick={handleOpen}>Add new Address</Button>
            </div>
          </div>

          <div>
            {/* choose payment section */}
            <div>
              <div className="space-y-3 border p-5 rounded-md">
                <h1 className="text-primary-color font-medium pb-2 text-center">Choose Payment Gateway</h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex justify-between pr-0 "
                  onChange={hadlePaymentChange}
                  value={paymentGateWay}
                >
                  {paymentGatwayList.map((item) => (
                    <FormControlLabel
                      className=" border w-[45%]  pr-2 rounded-md flex"
                      value={item.value}
                      control={<Radio />}
                      label={<img src={item.image} alt={item.value} />}
                    />
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="border rounded-md ">
              {/* princing */}
              <PricingCard />
              <div className="p-5">
                <Button fullWidth variant="contained" sx={{ py: "11px" }}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </>
  );
};

export default Checkout;
