import Link from "next/link";
import Header from "../components/Header";


function TeamProfile() {
  return (
    <>
    <main id="team-profile" className="ms-auto tp-dark">
        <div className="container-fluid pt-30">
            <Header/>
          <div className="row">
             <div className="col-8 my-auto tp__clan-cover ">
             <img className="w-100 h-100 border-16" src="img/teams_img/dota2.jpg" />
             </div>
                
              <div className="tp__clan-avatar col-4  text-center my-auto">
                <img className="border" src="img/teams_img/game-logo-8.png" />
              </div>
          </div>
          <div className="row">
              <div className="col-sm-12 col-xl-6 p-3"> 

                <h3>Team Roster</h3>
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                    <div className="tp__tourna tp_roster-cards border-16">
                    <div className="tp__roster-img  pt-1">

                    <img className="border-16  me-auto" src="img/team-profile_img/tommy.png" />
                    </div>
                    <div className="bg-fade-1">
                    <p className="text-center mt-2 ps-1 mb-1">Jhon Tommy</p>
                    </div>
                        
                        <p className=" ps-1 mb-1 text-center"><span className="text-gold">AKA &nbsp;</span>Meliodas</p>

    
                    </div>
                    
                    </div>
                    <div className="col-xl-4 col-md-6 ">
                    <div className="tp__tourna tp_roster-cards border-16">
                    <div className="tp__roster-img  pt-1">

                    <img className="border-16  me-auto" src="img/team-profile_img/solomon.jpg" />
                    </div>
                    <div className="bg-fade-1">
                    <p className="text-center mt-2 ps-1 mb-1">Tonnex Solomon</p>
                    </div>
                        
                        <p className="ps-1 mb-1 text-center" ><span className="text-gold">AKA &nbsp;</span>Lodicake</p>

    
                    </div>
                    </div>
                    <div className="col-xl-4  col-md-6">
                    <div className="tp__tourna tp_roster-cards border-16">
                    <div className="tp__roster-img  pt-1">

                    <img className="border-16  me-auto" src="img/team-profile_img/finn.jpg" />
                    </div>
                    <div className="bg-fade-1">
                    <p className="text-center mt-2 ps-1 mb-1">Josh Finn</p>
                    </div>
                        
                        <p className=" ps-1 mb-1 text-center"><span className="text-gold">AKA &nbsp;</span>Josh</p>

    
                    </div>
                    </div>
                    <div className="col-xl-4 col-md-6 ">
                    <div className="tp__tourna tp_roster-cards border-16">
                    <div className="tp__roster-img  pt-1">

                    <img className="border-16  me-auto" src="img/team-profile_img/john.jpg" />
                    </div>
                    <div className="bg-fade-1">
                    <p className="text-center mt-2 ps-1 mb-1">John James</p>
                    </div>
                        
                        <p className=" ps-1 mb-1 text-center"><span className="text-gold">AKA &nbsp;</span>James</p>

    
                    </div>
                    </div>
                    <div className="col-xl-4  col-md-6">
                    <div className="tp__tourna tp_roster-cards border-16">
                    <div className="tp__roster-img  pt-1">

                    <img className="border-16  me-auto" src="img/team-profile_img/arthur.jpg" />
                    </div>
                    <div className="bg-fade-1">
                    <p className="text-center mt-2 ps-1 mb-1">John Arthur</p>
                    </div>
                        
                        <p className=" ps-1 mb-1 text-center"><span className="text-gold">AKA &nbsp;</span>John Ray</p>

    
                    </div>
                    </div>
                    <div className="col-xl-4  col-md-6">
                    <div className="tp__tourna tp_roster-cards border-16">
                    <div className="tp__roster-img  pt-1">

                    <img className="border-16  me-auto" src="img/team-profile_img/jeremiah.jpg" />
                    </div>
                    <div className="bg-fade-1">
                    <p className="text-center mt-2 ps-1 mb-1">Jeremiah Lee</p>
                    </div>
                        
                        <p className=" ps-1 mb-1 text-center"><span className="text-gold">AKA &nbsp;</span>Leepatiam</p>

    
                    </div>
                    </div>
                </div>


                


              </div>
              {/* team roster */}
              <div className="col-sm-12 col-xl-6 p-3"> 
              <h3>Statistics</h3>
                <div className="tp__tourna row mb-2  border-16 ">
                    <div className="col-xl-6 col-xl-6 d-flex p-2 align-items-center border-16">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/manila.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Manila Major</p>
                            <p className="m-0 p-0">Philippines</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-around pe-3">
                        <p className="m-0 p-0">$120,000</p>
                           <button className=" bg-danger w-50 border-sp border-16 my-2 px-3 py-2 text-center">
                              Watch: Now Live
                            </button>
                    </div> 
                </div>

                <div className="tp__tourna row mb-2  border-16">
                    <div className="col-sm-12 col-xl-6 d-flex p-2 align-items-center border-16">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/frankfurt.jpeg" />
                        <div className="m-0 p-0 ">
                            <p className="m-0 p-0">frankfurt Major</p>
                            <p className="m-0 p-0">Germany</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-around pe-3">
                        <p className="m-0 p-0">$90,000</p>
                                                  <button className=" bg-danger w-50 border-sp border-16 my-2 px-3 py-2 text-center">
                              Watch: Now Live
                            </button>
                    </div> 
                </div>

                <div className="tp__tourna row mb-2  border-16">
                    <div className="col-xl-6 col-sm-12 d-flex p-2 align-items-center border-16">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/kiev.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Kiev Major</p>
                            <p className="m-0 p-0">Ukraine</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-around pe-3">
                        <p className="m-0 p-0">$150,000</p>
                                                  <button className=" bg-danger w-50 border-sp border-16 my-2 px-3 py-2 text-center">
                              Watch: Now Live
                            </button>
                    </div> 
                </div>

                <div className="tp__tourna row mb-2  border-16">
                    <div className="col-xl-6 col-sm-12 d-flex p-2 align-items-center border-16">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/shanghai major.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Shanghai Major</p>
                            <p className="m-0 p-0">Philippines</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-around pe-3">
                        <p className="m-0 p-0">$100,000</p>
                                                  <button className=" bg-danger w-50 border-sp border-16 my-2 px-3 py-2 text-center">
                              Watch: Now Live
                            </button>
                    </div> 
                </div>

                <div className="tp__tourna row mb-2  border-16">
                    <div className="col-xl-6 col-sm-12 d-flex p-2 align-items-center border-16">
                        <img className="tp__tourna-img me-2" src="img/team-profile_img/singapore major.jpg" />
                        <div className="m-0 p-0">
                            <p className="m-0 p-0">Singapore Ma</p>
                            <p className="m-0 p-0">Singapore</p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 pb-2 d-flex align-items-center justify-content-around pe-3">
                        <p className="m-0 p-0">$100,000</p>
                                                  <button className=" bg-danger w-50 border-sp border-16 my-2 px-3 py-2 text-center">
                              Watch: Now Live
                            </button>
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
