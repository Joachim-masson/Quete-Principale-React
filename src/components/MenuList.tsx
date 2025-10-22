import MenuItem from "./MenuItem.tsx";

interface foodItem {
	id: number;
	itemName: string;
	description: string;
	foodImage: string;
	price: number;
	isFavorite: boolean;
}

interface MenuListProps {
	foodItems: foodItem[];
}

function MenuList({ foodItems }: MenuListProps) {
	console.log(foodItems);

	return (
		<>
			{foodItems.map((menu) => (
				<MenuItem {...menu} key={menu.id} />
			))}
			{/* render a MenuItem component for each element of the foodItems array */}
		</>
	);
}

export default MenuList;
