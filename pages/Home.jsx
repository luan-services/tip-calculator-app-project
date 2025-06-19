import Challenge from "../components/Challenge"
import CalculatorContainer from '../components/CalculatorContainer'

export const Home = () => {
return (
    <div className="w-full flex flex-wrap justify-center items-center">
        <CalculatorContainer/>
        <Challenge/>
    </div>
)
}
