// import React from 'react' // You can uncomment this line if you haven't imported React elsewhere.

const Tabs = props => {
  const {tabDetails, clickItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
