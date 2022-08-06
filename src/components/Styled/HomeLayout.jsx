import Category from "../Post/Category";

const HomeLayout = (props) => {
  return (
    <>
      Move to each category!
      <Category contents='Create New Post' path='/create' />
      <Category contents='Read Posts' path='/posts' />
    </>
  );
};

export default HomeLayout;
