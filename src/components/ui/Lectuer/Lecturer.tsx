import { LecturerInfo } from "components/main-page/types";
// import styles from './Lectuer.modules.scss';

export default function Lectuer(lectuer: LecturerInfo) {
  // TODO: Rewrite to scss modules
  return (
    <div className="lectuer">
      <div className="lectuer__avatar">
        <img src={lectuer.avatar} alt={lectuer.fullName} />
      </div>
      <h3 className="lecuter__name">{lectuer.fullName}</h3>
      <p className="lectuer__bio">{lectuer.biography}</p>
    </div>
  );
}
