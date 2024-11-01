import { useGetMyOrders } from "@/api/OrderApi";
import { Loader } from "@/components/Loader";
import MetaTags from "@/components/MetaTags";
import OrderStatusDetails from "@/components/OrderStatusDetails";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <Loader title="Looking for orders..." />;
  }

  if (!orders || orders.length === 0) {
    return <span>No orders found</span>;
  }

  return (
    <>
      <MetaTags page="orderStatusPage" />
      <div className="space-y-10">
        {orders.map((order) => (
          <div
            key={order._id}
            className="space-y-10 bg-gray-50 p-10 rounded-lg"
          >
            <OrderStatusHeader order={order} />
            <div className="grid gap-10 md:grid-cols-2">
              <OrderStatusDetails order={order} />
              <AspectRatio ratio={16 / 5}>
                <img
                  src={order.restaurant.imageUrl}
                  className="rounded-md object-cover h-full w-full"
                />
              </AspectRatio>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderStatusPage;
