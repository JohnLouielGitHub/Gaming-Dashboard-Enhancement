import Link from "next/link";


function TeamProfile() {
  return (
    <>
    
    


    <main id="team-profile" className="ms-auto tp-dark">
        <div className="container-fluid">
          <div className="row">
             <div className="col-sm-12 col-xl-9 tp__clan-cover tp-light ">
             <img className="m-auto" src="img/team-profile_img/awu.png" />
             </div>
                
              <div className="tp__clan-avatar tp-red col-sm-12 col-xl-3">
                <img className="ms-auto me-auto mb-2" src="img/team-profile_img/ph-gen.png" />
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-xl-6 p-3"> 

                <h6>Team Roster</h6>
                <div className="row">
                    <div className="col-xl-4">
                    <div className="tp-blue tp_roster-cards">
                    <div className="tp__roster-img  p-1">

                    <img className=" me-auto" src="img/team-profile_img/tommy.png" />
                    </div>
                        <p className="mt-2 ps-1 mb-1">Jhon Tommy</p>
                        <p className=" ps-1 mb-1">aka Meliodas</p>

    
                    </div>
                    
                    </div>
                    <div className="col-xl-4 ">
                    <div className="tp-blue tp_roster-cards">
                    <div className="tp__roster-img  p-1">

                    <img className=" me-auto" src="img/team-profile_img/solomon.jpg" />
                    </div>
                        <p className="mt-2 ps-1 mb-1">Tonnex Solomon</p>
                        <p className="ps-1 mb-1">aka Lodicake</p>

    
                    </div>
                    </div>
                    <div className="col-xl-4 ">
                    <div className="tp-blue tp_roster-cards">
                    <div className="tp__roster-img  p-1">

                    <img className=" me-auto" src="img/team-profile_img/finn.jpg" />
                    </div>
                        <p className="mt-2 ps-1 mb-1">Josh Finn</p>
                        <p className=" ps-1 mb-1">aka Josh</p>

    
                    </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-xl-4 ">
                    <div className="tp-blue tp_roster-cards">
                    <div className="tp__roster-img  p-1">

                    <img className=" me-auto" src="img/team-profile_img/john.jpg" />
                    </div>
                        <p className="mt-2 ps-1 mb-1">John James</p>
                        <p className=" ps-1 mb-1">aka James</p>

    
                    </div>
                    </div>
                    <div className="col-xl-4 ">
                    <div className="tp-blue tp_roster-cards">
                    <div className="tp__roster-img  p-1">

                    <img className=" me-auto" src="img/team-profile_img/arthur.jpg" />
                    </div>
                        <p className="mt-2 ps-1 mb-1">John Arthur</p>
                        <p className=" ps-1 mb-1">aka John Ray</p>

    
                    </div>
                    </div>
                    <div className="col-xl-4 ">
                    <div className="tp-blue tp_roster-cards">
                    <div className="tp__roster-img  p-1">

                    <img className=" me-auto" src="img/team-profile_img/jeremiah.jpg" />
                    </div>
                        <p className="mt-2 ps-1 mb-1">Jeremiah Lee</p>
                        <p className=" ps-1 mb-1">aka Leepatiam</p>

    
                    </div>
                    </div>
                </div>


                


              </div>
              {/* team roster */}
              <div className="col-sm-12 col-xl-6 p-3"> <h6>Statistics</h6>
                <div className="tp__tourna row mb-3 ">
                    <div className="col-xl-6 col-xxs-12 d-flex p-2 align-items-center tp-light">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/manila.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Manila Major</p>
                            <p className="m-0 p-0">Philippines</p>
                        </div>
                    </div>

                    <div className="tp-light col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3">
                        <p className="m-0 p-0">$120,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-sm-12 col-xl-6 d-flex p-2 align-items-center tp-light">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/frankfurt.jpeg" />
                        <div className="m-0 p-0 ">
                            <p className="m-0 p-0">frankfurt Major</p>
                            <p className="m-0 p-0">Germany</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3 tp-light">
                        <p className="m-0 p-0">$90,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-xl-6 col-sm-12 d-flex p-2 align-items-center tp-light">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/kiev.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Kiev Major</p>
                            <p className="m-0 p-0">Ukraine</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3 tp-light">
                        <p className="m-0 p-0">$150,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-xl-6 col-sm-12 d-flex p-2 align-items-center tp-light">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/shanghai major.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Shanghai Major</p>
                            <p className="m-0 p-0">Philippines</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3 tp-light">
                        <p className="m-0 p-0">$100,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-xl-6 col-sm-12 d-flex p-2 align-items-center tp-light">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/singapore major.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Singapore Ma</p>
                            <p className="m-0 p-0">Singapore</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3 tp-light">
                        <p className="m-0 p-0">$100,000</p>
                        <p className="tp__win-lose m-0 p-0 bg-primary">Win</p>
                    </div> 
                </div>

                <div className="tp__tourna row mb-3">
                    <div className="col-xl-6 col-sm-12 d-flex p-2 align-items-center tp-light">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/Dota-2-Boston-Major-Tournament.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Boston Major</p>
                            <p className="m-0 p-0">USA</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-between pe-3 tp-light">
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
