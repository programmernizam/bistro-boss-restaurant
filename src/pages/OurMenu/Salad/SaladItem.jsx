import MenuItemCard from "../../../components/MenuItemCardList";
import SharedButton from "../../../components/SharedButton";
import Container from "../../Shared/Container";

const SaladItem = ({ salad }) => {
  return (
    <Container>
      <div className="text-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
          {salad.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </div>
        <SharedButton title={"ORDER YOUR FAVORITE SALADS"} />
      </div>
    </Container>
  );
};

export default SaladItem;
