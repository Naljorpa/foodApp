import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    console.log(props);
    const handleCart = () => {
        props.onShowCart(true)
    }
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={handleCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A buffet of delicious food!" />
            </div>
        </>
    )
}

export default Header;
