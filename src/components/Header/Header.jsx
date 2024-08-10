import './Header.css';

export function Header() {
  return (
    <header>
      <div className='logo'>
        <img
          className='colombia-flag'
          src='https://www.state.gov/wp-content/uploads/2018/07/colombia-flag.gif'
          height='100%'
        />
        <span className='logo-desc'>Colombia API</span>
      </div>
      <div></div>
    </header>
  );
}
