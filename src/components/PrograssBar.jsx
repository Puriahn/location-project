export default function PrograssBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const inter = setInterval(() => {
      setRemainingTime((prevR) => prevR - 10);
    }, 10);
    return () => {
      clearInterval(inter);
    };
  }, []);
  return <progress value={remainingTime} max={timer}/>;
}
