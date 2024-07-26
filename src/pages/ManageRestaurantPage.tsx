import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import { Loader } from "@/components/Loader";
import MetaTags from "@/components/MetaTags";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();

  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { restaurant, isLoading: isRestaurantLoading } = useGetMyRestaurant();

  const { orders, isLoading: isOrdersLoading } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <>
      <MetaTags
        page="manageRestaurantPage"
        dynamicProps={{
          restaurantName: restaurant ? restaurant.restaurantName : "",
        }}
      />
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
        </TabsList>
        <TabsContent
          value="orders"
          className="space-y-5 bg-gray-50 p-10 rounded-lg min-h-96"
        >
          {isOrdersLoading && <Loader title="Loading restaurant orders..." />}

          {!isOrdersLoading && !orders?.length && <span>No active orders</span>}

          {orders && orders.length > 0 && (
            <h2 className="text-2xl font-bold">
              {orders.length} active orders
            </h2>
          )}

          {orders?.map((order) => (
            <OrderItemCard key={order._id} order={order} />
          ))}
        </TabsContent>
        <TabsContent value="manage-restaurant">
          {isRestaurantLoading && <Loader title="Loading restaurant form..." />}

          <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isLoading={isCreateLoading || isUpdateLoading}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ManageRestaurantPage;
