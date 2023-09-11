import { LectuerInfo } from "components/main-page/types";
// import styles from './Lectuer.modules.scss';

export default function Lectuer(lectuer: LectuerInfo){
    // TODO: Rewrite to scss modules
    return (
        <div className="lectuer">
            <div className="lectuer__avatar">
                <img src={lectuer.avatar} alt={lectuer.nameAndSurname} />
            </div>
            <h3 className="lecuter__name">{lectuer.nameAndSurname}</h3>
            <p className="lectuer__bio">{lectuer.biography}</p>
        </div>
    )
}