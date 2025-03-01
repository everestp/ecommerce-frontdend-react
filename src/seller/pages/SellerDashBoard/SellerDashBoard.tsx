import React from "react";
import SellerDrawerList from "../../components/SellerDrawerList/SellerDrawerList";

const SellerDashBoard = () => {
  return (
    <div>
      <div className="lg:flex lg:h-[90vh] ">
        <section className="hidden lg:block h-full">
            <SellerDrawerList toggleDrawer={undefined}/>
            </section>

        <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
          seller routes
        </section>
      </div>
    </div>
  );
};

export default SellerDashBoard;
