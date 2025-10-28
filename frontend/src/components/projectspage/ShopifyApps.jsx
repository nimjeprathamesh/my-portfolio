import { useContext } from "react";
import { MyContext } from "../../Context/Context";
import { shopifyData } from "../../utils/constants";
import Shopify from "./Shopify";

const ShopifyApps = () => {
    const { theme } = useContext(MyContext);

    return (
        <div
            className="content pt-10 md:pt-15 xl:pt-25 pb-10 md:pb-25 max-xxl:p-2"
            id="portfolio"
        >
            <div className="xl:mb-17.5 mb-5">
                <div className="max-sm:px-2 text-center mx-auto">
                    <p className={`section-title ${
                        theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>
                        Shopify Apps I have developed and Published
                    </p>
                </div>
            </div>
            <div className="mx-auto flex justify-center">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                    {shopifyData.map((data, index) => (
                        <Shopify data={data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopifyApps;