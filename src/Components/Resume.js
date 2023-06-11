import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
        var resumeDownload = this.props.data.resumedownload;
        var work = this.props.data.work.map(function(work){
            return <div key={work.company}>
                <h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p className='new-line'>{work.description}</p>
            </div>
        })
        var education = this.props.data.education.map(function(education){
            return <div key={education.school}>
                <h3>{education.school}</h3>
                <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p>{education.description}<br/>{education.supervisor}</p>
            </div>
        })
        // var publications = this.props.data.publications.map(function (publications) {
        //     return <div>
        //         <p>{publications.author}, <em>"{publications.title}"</em>, {publications.journal}, vol. {publications.volume}, iss. {publications.number}, pp. {publications.pages}, {publications.year}. <em className="new-line">doi: {publications.doi}</em></p>
        //     </div>
        //
        // })
    }

    return (
      <section id="resume">
          <div className="row work">
              <p>For details on invited talks and conference presentations, teaching and supervision, professional memberships and more, please <a href="https://laura-uib.s3.eu-north-1.amazonaws.com/Garrison_CV.pdf" target="_blank" rel="noreferrer">see my full CV</a>.</p>
              <div className="three columns header-col">
                  <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                  {work}
              </div>
          </div>

          <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div className="row awards">
          <div className="three columns header-col">
              <h1><span>Recent Awards</span></h1>
          </div>
          <div className="nine columns main-col">
              <div className="row item">
                  <div className="twelve columns">
                      <p><strong>Recipient, Dirk Bartz Prize for Visual Computing in Medicine and Life Sciences 2023 (Eurographics Medical Prize)</strong>, EuroVis Conference, Leipzig, Germany, 2023.</p>
                      <p><strong>Best Redesign Challenge Entry</strong>, Bio+MedVis Protein Beasts Redesign Challenge @ IEEE VIS, Oklahoma City, Oklahoma, 2022.</p>
                      <p><strong>Honorable Mention, Best Full Paper</strong>, Eurographics Workshop for Visual Computing in Biology and Medicine, Paris, France, 2021.</p>
                      <p><strong>MedVis Award (Karl-Heinz Höhne Award)</strong>, 2nd prize. Regensburg, Germany. 2021.</p>
                      <p><strong>Selected Participant</strong>, GenderActs Program for Early Career Researchers, Faculty of Mathematics and Natural Sciences, University of Bergen, 2021-22.</p>
                      <p><strong>Best Poster Award</strong>. 2019 EuroVis Conference, Porto, Portugal. 2019.</p>

                  </div>
              </div>
          </div>
      </div>

          <div className="row publications">
              <div className="three columns header-col">
                  <h1><span>Publications</span></h1>
              </div>

              <div className="nine columns main-col">
                  <div className="row item">
                      <div className="twelve columns">
                          {/*{publications}*/}
                          <p>
                              S. Mittenentzwei, V. Weiß, S. Schreiber, <strong>L. A. Garrison</strong>, S. Bruckner, M. Pfister, B. Preim, M. Meuschke, “Do disease stories need a hero? Effects of human protagonists on a narrative visualization about cerebral small vessel disease,” Computer Graphics Forum, (to be presented at EuroVis Conference 2023 in Leipzig, Germany), 2023.
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, D. Goodsell, S. Bruckner, “Changing Aesthetics in Molecular Graphics,” IEEE Computer Graphics & Applications, May-Jun;43(3):94-101, 2023.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1109/MCG.2023.3250680" target="_blank">10.1109/MCG.2023.3250680</a></span>

                          </p>
                          <p>
                              M. Meuschke, <strong>L. A. Garrison</strong>, N. N. Smit, B. Bach, S. Mittenentzwei, V. Weiß, S. Bruckner, K. Lawonn, and B. Preim, “Narrative Medical Visualization to Communicate Disease Data,” Computers & Graphics, vol. 107, pp. 144-157, 2022.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1016/j.cag.2022.07.017" target="_blank">10.1016/j.cag.2022.07.017</a></span>
                          </p>
                          <p>
                              A. Kleinau, E. Stupak, E. Mörth, <strong>L. A. Garrison</strong>, S. Mittenentzwei, N. N. Smit, K. Lawonn, S. Bruckner, M. Gutberlet, B. Preim, and M. Meuschke,
                              "Is there a Tornado in Alex’s Blood Flow? A Case Study for Narrative Medical Visualization,"
                              Proceedings of EuroGraphics Workshop on Visual Computing for Biology and Medicine (VCBM), 2022.
                              <br/>
                              <span className="info">doi: <a href="https://conferences.eg.org/vcbm2022/program/" target="_blank">TBD</a></span>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, "From Molecules to the Masses : Visual Exploration, Analysis, and Communication of Human Physiology,"
                              PhD Dissertation, University of Bergen, 2022.
                              <br />
                              <span className="info">Access: <a href="https://bora.uib.no/bora-xmlui/handle/11250/3015990" target="_blank">https://bora.uib.no/bora-xmlui/handle/11250/3015990</a></span>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong> and S. Bruckner, "Considering Best Practices in Color Palettes for Molecular Visualizations," Design X Bioinformatics Special Issue of Journal of Integrative Bioinformatics, vol. 19(2), pp. 20220016, 2022.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1515/jib-2022-0016" target="_blank">10.1515/jib-2022-0016</a></span>
                          </p>
                          <p>
                              Y. S. Kristiansen, <strong>L. A. Garrison</strong>, and S. Bruckner, "Content-Driven Layout for Visualization Design," Proceedings of International Symposium on Visual Information Communication and Interaction (VINCI), 2022.
                          </p>
                          <p>
                              M. Meuschke, <strong>L. A. Garrison</strong>, N. N. Smit, B. Bach, S. Mittenentzwei, V. Weiß, S. Bruckner, K. Lawonn, and B. Preim, "Narrative Medical Visualization to Communicate Disease Data," Computers & Graphics, vol. 107, pp. 144-157, 2022.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1016/j.cag.2022.07.017" target="_blank">10.1016/j.cag.2022.07.017</a></span>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, I. Kolesár, I. Viola, H. Hauser, and S. Bruckner, "Trends & Opportunities in Visualization for Physiology: A Multiscale Overview," Computer Graphics Forum, vol. 41(3), pp. 609-643, 2022.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1111/cgf.14575" target="_blank">10.1111/cgf.14575</a></span>
                          </p>
                          <p>
                              Y. S. Kristiansen, <strong>L. A. Garrison</strong>, and S. Bruckner, "Semantic Snapping for Guided Multi-View Visualization Design," IEEE Transactions on Visualization and Computer Graphics vol. 28(1), pp. 43-53, 2022.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1109/TVCG.2021.3114860" target="_blank">10.1109/TVCG.2021.3114860</a></span>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, M. Meuschke, J. Fairman, N. Smit, B. Preim, and S. Bruckner, "An Exploration of Practice and Preferences for the Visual Communication of Biomedical Processes," Proceedings of EuroGraphics Workshop on Visual Computing for Biology & Medicine (VCBM), pp.1–12, 2021.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.2312/vcbm20211339" target="_blank">10.2312/vcbm20211339</a></span><br/>
                              <em>Received <strong>Honorable Mention for Best Full Paper</strong> at the VCBM 2021 Workshop in Paris, France.</em>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, J. Müller, S. Schreiber, S. Oeltze-Jafra, H. Hauser, and S. Bruckner, "DimLift: Interactive Hierarchical Data Exploration through Dimensional Bundling," IEEE Transactions on Visualization & Computer Graphics, vol. 27(6), pp. 2908-2922, 2021.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1109/TVCG.2021.3057519" target="_blank">10.1109/TVCG.2021.3057519</a></span>
                              <br/><em>This work, together with SpectraMosaic, received an <strong>Honorable Mention for the 2021
                              MedVis (Karl Heinz Höhne) Award</strong>, awarded by the professional group Visual
                                  Computing in Biology and Medicine, a section of the German Society for Computer
                                  Science, and sponsored by Brainlab AG in Munich.</em>
                          </p>
                          <p>
                              J. Müller, <strong>L. A. Garrison</strong>, P. Ulbrich, S. Schreiber, S. Bruckner, H. Hauser, and S. Oeltze-Jafra. "Integrated Dual Analysis of Quantitative and Qualitative High- Dimensional Data," IEEE Transactions on Visualization & Computer Graphics vol. 27(6), pp. 2953-296, 2021.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1109/TVCG.2021.3056424" target="_blank">10.1109/TVCG.2021.3056424</a></span>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, J. Vašíˇcek, A. R. Craven, R. Grüner, N. Smit, and S. Bruckner, "Interactive Visual Exploration of Metabolite Ratios in MR Spectroscopy Studies," Computers & Graphics, vol. 92, pp. 1–12, 2020.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.1016/j.cag.2020.08.001" target="_blank">10.1016/j.cag.2020.08.001</a></span>
                              <br/><em>This work, together with DimLift, received an <strong>Honorable Mention for the 2021
                              MedVis (Karl Heinz Höhne) Award</strong>, awarded by the professional group Visual
                                  Computing in Biology and Medicine, a section of the German Society for Computer
                                  Science, and sponsored by Brainlab AG in Munich.</em>
                          </p>
                          <p>
                              H. Bartsch, <strong>L. A. Garrison</strong>, S. Bruckner, A. Wang, S. F. Tapert, and R. Grüner, "MedUse: A Visual Analysis Tool for Medication Use Data in the ABCD Study," Proceedings of EuroGraphics Workshop on Visual Computing for Biology & Medicine (VCBM) (Short Papers), p. 97–101, 2019.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.2312/vcbm.20191236" target="_blank">10.2312/vcbm.20191236</a></span>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, J. Vašíˇcek, R. Grüner, N. Smit, and S. Bruckner, "SpectraMosaic: An Exploratory Tool for the Interactive Visual Analysis of Magnetic Resonance Spectroscopy Data," Proceedings of EuroGraphics Workshop on Visual Computing for Biology & Medicine (VCBM), p. 1–10, 2019.
                              <br/>
                              <span className="info">doi: <a href="https://doi.org/10.2312/vcbm20191225" target="_blank">10.2312/vcbm20191225</a></span>
                          </p>
                          <p>
                              <strong>L. A. Garrison</strong>, J. Vašíˇcek, R. Grüner, N. Smit, and S. Bruckner, "A Visual Encoding System for Comparative Exploration of Magnetic Resonance Spectroscopy Data," Proceedings of EuroVis (Posters), 2022.<br/>
                              <em>Awarded <strong>Best Poster</strong> at EuroVis 2019 Conference in Porto, Portugal.</em>
                          </p>
                      </div>
                  </div>
              </div>
          </div>

   </section>
    );
  }
}

export default Resume;
