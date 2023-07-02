import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MinusCircle, PlusCircle, X } from "phosphor-react";
import axios from "axios";

const Shops = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const options = {
      method: "GET",
      url: "https://api.spoonacular.com/food/menuItems/424571",
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      // setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-4 rounded-sm p-6 shadow-lg drop-shadow-2xl">
        <Link to={"/"}>
          <X size={32} color="#e91e63" className="" />
        </Link>
        <div>
          <p className="text-lg">Shop</p>
          <p className="-mt-2 text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      <div className="space-y-10 p-6">
        {/* {data.map((pizza) => (
        <div key={pizza.id} className="shadow-md drop-shadow-md rounded-t-md">
            <img src={pizza.img} alt="" className="rounded-t-md" />
          <div className="p-2 mt-5 flex justify-between items-start">
            <div>
              <p>{pizza.name}</p>
              <p>${pizza.price}</p>
            </div>
            <div className="flex justify-between items-center gap-4 max-w-[7rem]">
          <MinusCircle onClick={() => {setCount(count - 1)}} />
          <p>{count}</p>
          <PlusCircle onClick={() => {setCount(count + 1)}} />
        </div>
          </div>
        </div>
      ))} */}
      </div>
    </div>
  );
};

export default Shops;
