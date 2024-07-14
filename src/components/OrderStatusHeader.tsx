import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";
import { ChevronsRight } from "lucide-react";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <h1 className="text-2xl flex flex-col gap-5 lg:flex-row md:justify-between">
        <span className="flex items-start flex-col md:flex-row md:items-center">
          <span className="font-bold shrink-0">Order Status </span>
          <ChevronsRight className="mt-1 hidden md:block" />
          <span>{getOrderStatusInfo().label}</span>
        </span>
        <span className="flex items-start flex-col md:flex-row md:items-center">
          <span className="font-bold">Expected by </span>
          <ChevronsRight className="mt-1 hidden md:block" />
          <span>{getExpectedDelivery()}</span>
        </span>
      </h1>
      <Progress
        className="animate-pulse"
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
