import { useEffect, useState } from "react";

const useMenu = () => {
    const [menus,setMenu] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('/menu.json') 
          .then(res => res.json())
          .then(data => {
            setMenu(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching menu data:', error);
          });
    }, [])

    return [menus, loading];    
}
export default useMenu;