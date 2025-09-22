import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null); //save token to local storage to verify user
  const [blogs, setBlogs] = useState([]); //get all blogs
  const [input, setInput] = useState(""); //filter the blogs

  //fetch all blogs
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    fetchBlogs();

    const token = localStorage.getItem('token')
    if(token){
      setToken(token)
      axios.defaults.headers.common['Authorization'] = `${token}`
    }
  }, [])

  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
