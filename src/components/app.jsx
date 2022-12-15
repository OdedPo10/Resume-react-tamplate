import React, { Component } from 'react';
import femaleAvatar from '../images/femaleAvatar.png';
// import maleAvater from '../images/maleAvater.jpeg';
import jsPDF from 'jspdf';
class App extends Component {
    state = {} 
    render() { 
        return (
            <React.Fragment>
                 <li>Print Styled <button onClick={()=>this.printHtml()} type="button">Download HTML PDF</button></li>
                 <li>Print Styled <button onClick={()=>this.codespeedy()} type="button">Download HTML PDF2</button></li>
                    <div className="book" id="book">
                        <div className="page">
                            <div className="subpage">
                                <img src={femaleAvatar} id="avatar"></img>
                                <h1 id="nameHeader">Name Goes Here</h1>          
                                <h4 id="profHea der"></h4>
                            </div> 
                            <div className="about">
                                <div className="details">
                                    <div className="about2">
                                        <h2 className="aboutHeader">About Me</h2>
                                        <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id dolores veniam nostrum, nesciunt soluta minus sed, ducimus  
                                        </p>
                                    </div>
                                    <div className="about2">
                                    <div className="row mt-2">
                                    <div className="col-sm-4">
                                    <div className="pb-1">Age</div>
                                    </div>
                                    <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">28</div>
                                    </div>
                                    <div className="col-sm-4">
                                    <div className="pb-1">Email</div>
                                    </div>
                                    <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">Email@goes.here</div>
                                    </div>
                                    <div className="col-sm-4">
                                    <div className="pb-1">Phone</div>
                                    </div>
                                    <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">+Phone-goes-here</div>
                                    </div>
                                    <div className="col-sm-4">
                                    <div className="pb-1">Address</div>
                                    </div>
                                    <div className="col-sm-8">
                                    <div className="pb-1 text-secondary">140, Address Goes, Right Here</div>
                                    </div>
                                    </div>

                                    </div>
                                </div>
                            </div> 
                            <div className="personalSkills">
                                <h2 className="aboutHeader2">Professional Skills</h2>
                                <div className="col-md-6">
                                    <div className="mb-2"><span className="skillH">HTML</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-primary" style={{width:"70%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">CSS</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-primary" style={{width:"90%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">Java Script</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-primary" style={{width:"50%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">C#</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-primary" style={{width:"100%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">Python</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-primary" style={{width:"25%"}}></div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-2"><span className="skillH">Confidence</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-success" style={{width:"60%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">Empathy</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-success" style={{width:"40%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">Public speaking</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-success" style={{width:"57%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">Sensitivity</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-success" style={{width:"20%"}}></div>
                                    </div>
                                    </div>
                                    <div className="mb-2"><span className="skillH">Patience</span>
                                    <div className="progress my-1">
                                        <div className="progress-bar bg-success" style={{width:"100%"}}></div>
                                    </div>
                                    </div>
                                </div>
                                <p id="par2" className="par2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi optio quasi in eaque magnam iure odit similique voluptatum ullam natus, esse omnis dolore possimus, voluptatibus mollitia consequatur officia </p>
                            </div>
                            <div className="contact">
                            <h2 className="aboutHeader4">LinkedIn <span className="text-muted h6">LinkedIn Account Link Here</span></h2>
                            <h2 className="aboutHeader4">Github <span className="text-muted h6">Github Account Link Here</span></h2>
                            
                            </div>   
                        </div>
                        <div className="page2">
                        <div className="experience">
                            <h2 className="aboutHeader3">Work Experience</h2>
                            <div className="work1">
                                <div className="timeLine">
                                    <div className="timline-card timline-card-primary card shadow-sm" id="outCard">
                                        <div className="card-body">
                                        <div className="h5 mb-1">Frontend Developer <span className="text-muted h6">at Creative Agency</span></div>
                                        <div className="text-muted text-small mb-2">May, 2015 - Present</div>
                                        <div className="workPar"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non exercitationem eos, voluptas rerum unde cum ipsa quod illo tempora quo at esse fugit, excepturi voluptatem deserunt neque suscipit in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sunt voluptatem quidem nulla. Repudiandae error maiores numquam vero temporibus velit aut sapiente tenetur placeat labore dolorum, rem.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="education">
                            <h2 className="aboutHeader3">Education</h2>
                            <div className="work1">
                                <div className="timeLine">
                                    <div className="timline-card timline-card-primary card shadow-sm" id="outCard2">
                                        <div className="card-body">
                                        <div className="h5 mb-1">Bachelor of Computer Science <span className="text-muted h6">from Regional College</span></div>
                                        <div className="text-muted text-small mb-2">2007 - 2011</div>
                                        <div className="workPar"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non exercitationem eos, voluptas rerum unde cum ipsa quod illo tempora quo at esse fugit, excepturi voluptatem deserunt neque suscipit in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sunt voluptatem quidem nulla. Repudiandae error maiores numquam vero temporibus velit aut sapiente tenetur placeat labore dolorum, rem.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        
        );
    }
    printHtml = () => {
    const doc = new jsPDF ('p', 'px', [862.5, 1175]);
    doc.html(document.querySelector(".page"),{
        callback:function(pdf){const pageCount=doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("Resume.pdf");
    }})
    }
  
        codespeedy=()=>{
            window.print();
    // const doc2 = new jsPDF ('p', 'px', [790, 1160]);
    // doc2.html(document.querySelector(".page2"),{
    //     callback:function(pdf){const pageCount=doc2.internal.getNumberOfPages();
    //     pdf.deletePage(pageCount);
    //     pdf.save("Resume.pdf");
    // }})
    }
}
 
export default App;

// [900, 1200]`


