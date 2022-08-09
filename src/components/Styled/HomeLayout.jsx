import Category from "../Post/Category";

const HomeLayout = (props) => {
  return (
    <>
      <h3 className='font-bold'>🎉 Move to each category...</h3>
      <Category contents='✍️ Create New Post ' path='/create' />
      <Category contents='👀 Read Posts' path='/posts' />
    </>
  );
};

export default HomeLayout;
