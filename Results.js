// Results.js

const Results = ({results}) => {
    const { country, cityName, tempreture, conditionText, icon} = results;
    return (
        <div>
            {country && <div className = "results-country">{country}</div>}
            {cityName && <div className = "results-city"> {cityName}</div>}
            {tempreture && <div className = "results-temp"> {tempreture}<span> ° C </span></div>}
            {conditionText && <div className="results-condition"><img src= {icon} alt="icon"/>
            <span>{conditionText}</span></div>}
        </div>
    );   
};

export default Results;