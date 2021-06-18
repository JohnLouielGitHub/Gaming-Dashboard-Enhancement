import Link from "next/link";


function TeamProfile() {
  return (
    <>
    <main id="team-profile" className="ms-auto">
        <div className="container-fluid">
          <div className="row">
             <div className="col-sm-12 col-xl-9 tp__clan-cover bg-primary">
             <img className="m-auto" src="img/team-profile_img/awu.png" />
             </div>
                
              <div className="tp__clan-avatar col-sm-12 col-xl-3">
                <img className="ms-auto me-auto mb-2" src="img/team-profile_img/ph-gen.png" />
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-xl-12 bg-success p-3"> 

                <h6>Team Roster</h6>
                <div className="row">
                    <div className="col-4 bg-warning">
                        sdf
                    </div>
                    <div className="col-4 bg-info">
                        sdf
                    </div>
                    <div className="col-4 bg-primary">
                        asdf
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 bg-warning">
                        sdf
                    </div>
                    <div className="col-4 bg-info">
                        sdf
                    </div>
                    <div className="col-4 bg-primary">
                        asdf
                    </div>
                </div>


                


              </div>
              {/* team roster */}
              <div className="col-sm-12  p-3"> <h6>Statistics</h6>
                <div className="tp__tourna row mb-3">
                    <div className="col-xxs-12 d-flex p-2 align-items-center">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/manila.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Manila Major</p>
                            <p className="m-0 p-0">Philippines</p>
                        </div>
                    </div>

                    <div className="col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3">
                        <p className="m-0 p-0">$120,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-sm-12 d-flex p-2 align-items-center">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/frankfurt.jpeg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">frankfurt Major</p>
                            <p className="m-0 p-0">Germany</p>
                        </div>
                    </div>

                    <div className="col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3">
                        <p className="m-0 p-0">$90,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-sm-12 d-flex p-2 align-items-center">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/kiev.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Kiev Major</p>
                            <p className="m-0 p-0">Ukraine</p>
                        </div>
                    </div>

                    <div className="col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3">
                        <p className="m-0 p-0">$150,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-sm-12 d-flex p-2 align-items-center">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/shanghai major.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Shanghai Major</p>
                            <p className="m-0 p-0">Philippines</p>
                        </div>
                    </div>

                    <div className="col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3">
                        <p className="m-0 p-0">$100,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-sm-12 d-flex p-2 align-items-center">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/singapore major.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Singapore Ma</p>
                            <p className="m-0 p-0">Singapore</p>
                        </div>
                    </div>

                    <div className="col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3">
                        <p className="m-0 p-0">$100,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-sm-12 d-flex p-2 align-items-center">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/Dota-2-Boston-Major-Tournament.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Boston Major</p>
                            <p className="m-0 p-0">USA</p>
                        </div>
                    </div>

                    <div className="col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3">
                        <p className="m-0 p-0">$110,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

               
              </div>
              {/* statistics */}
          </div>
        </div> 
    </main>
        
    </>
  );
}
export default TeamProfile;
