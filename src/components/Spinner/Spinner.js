import { ColorRing } from  'react-loader-spinner'

 const Spinner = ()=>(
    <ColorRing
    visible={true}
    ariaLabel="blocks-loading"
    wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0 auto',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '9999',
      }}
    wrapperClass="blocks-wrapper"
    colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
  />
);

export default Spinner;