function MyComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  const [isMount, setIsMount] = useState(false)
  
    useEffect(() => {
      setIsMount(true)
  
      const fetchData = async () => {
        try {
   if (isMounted) {
          const response = await fetch('https://api.example.com/data');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
         
         
            setData(result);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
  
      return () => {
        setIsMount(false)
      };
    }, []);