import { useState } from "react"

const Content = (props) => {
  const [themeValue, setThemeValue] = useState(0)
  
  const switchTheme = () => {
    setThemeValue(themeValue + 1)
  }

    if (themeValue % 2 === 0) {
      return (
        <div className="wrapper">
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint rerum veritatis molestiae itaque iusto quod cupiditate unde, deserunt nostrum rem pariatur perspiciatis suscipit et quia aperiam corrupti, tempora quidem assumenda praesentium quo quasi dolorum! Obcaecati temporibus odit adipisci provident soluta eum laudantium veritatis in excepturi? At eum eos suscipit laudantium sint. Deserunt quisquam a nisi dolorem, quae fuga voluptatibus. Molestiae, explicabo expedita inventore pariatur saepe, iste libero atque tenetur, corporis quas doloremque animi praesentium? Velit eum perferendis id at, porro blanditiis eligendi molestias pariatur itaque voluptatibus delectus, distinctio ipsam, quos quod hic doloribus tempore. Consequuntur architecto ducimus fugiat iure.
          </div>
          <button onClick={switchTheme} className="btn">
            Switch theme
            <img className='img' src="/src/assets/imgs/sun.svg" alt="" />
          </button>
        </div>
      )
    } else {
      return (
        <div className="wrapper-dark">
          <div className="content-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint rerum veritatis molestiae itaque iusto quod cupiditate unde, deserunt nostrum rem pariatur perspiciatis suscipit et quia aperiam corrupti, tempora quidem assumenda praesentium quo quasi dolorum! Obcaecati temporibus odit adipisci provident soluta eum laudantium veritatis in excepturi? At eum eos suscipit laudantium sint. Deserunt quisquam a nisi dolorem, quae fuga voluptatibus. Molestiae, explicabo expedita inventore pariatur saepe, iste libero atque tenetur, corporis quas doloremque animi praesentium? Velit eum perferendis id at, porro blanditiis eligendi molestias pariatur itaque voluptatibus delectus, distinctio ipsam, quos quod hic doloribus tempore. Consequuntur architecto ducimus fugiat iure.
          </div>
          <button onClick={switchTheme} className="btn-dark">
            Switch theme
            <img className='img' src="/src/assets/imgs/moon.svg" alt="" />
          </button>
        </div>
      )
    }

}

export default Content
