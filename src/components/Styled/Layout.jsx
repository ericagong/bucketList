// TODO fragment not working!
// TODO h not working w/o parent component
const Layout = (props) => {
  return (
    <div className='h-screen'>
      <div className='h-5/6 w-4/5 my-20 mx-auto pt-10 text-center rounded shadow-lg space-y-20 text-lg'>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
