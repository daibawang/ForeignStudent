<template>
  <div>
    <el-header>
      <img src="~images/shool_logo_blue1.png" class="img_logo">
      <div class="header_title">
        <span>北京城市学院留学生申请系统 {{this.city}} </span>
        <span class="english_text">Application For International Student Admission</span>
      </div>
    </el-header>
    <div class="container">
      <div class="ALM_content">
        <div class="ALM_content_aside" style="height:60px">
              <div class="ALM_content_aside_item aside_item_nocheck">
                <span class="item_ch">招生简章<p>Recruitment Information</p></span>
              </div>
        </div>
        <div class="ALM_content_right" style="text-align: left;">
          <div class="recruitment-title" v-html="this.news.title"></div>
          <div class="recruitment-data">
            <span>发布时间:</span><span v-html="this.news.time">2018-11-24</span>
          </div>
          <div class="recruitment-all-content">
            <div class="recruitment-title-samll">
              <!-- 一 -->
              <p>Major and Program</p>
              <div class="recruitment-content" v-html="this.news.first"></div>
              <span class="iconfont" style="color:#EE761C;">&#xe618;</span>
              <a class="recruitment-more" target="_blank" href="http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm">More Information </a>
              <!-- 2 -->
              <p>Program Mode and Registration Period</p>
              <div class="recruitment-content" v-html="this.news.second"></div>
              <!-- 3 -->
              <p>The Application Requirements</p>
              <div class="recruitment-content" v-html="this.news.third"></div>
              <!-- 4 -->
              <p>Application Period and Submission</p>
              <div class="recruitment-content" v-html="this.news.forth"></div>
              <!-- 5 -->
              <p>Application Procedures</p>
              <div class="recruitment-content" v-html="this.news.five"></div>
              <span class="iconfont" style="color:#EE761C;"><i class="el-icon-download"></i></span>
              <a class="recruitment-more" target="_blank" href="http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm">Download</a>
              <!-- 6 -->
              <p>Admission Requirements</p>
              <div class="recruitment-content" v-html="this.news.six"></div>
              <span class="iconfont" style="color:#EE761C;"><i class="el-icon-download"></i></span>
              <a class="recruitment-more" target="_blank" href="http://www.bcu.edu.cn/bjxy/PROGRAMMES_FOR_INTERNATIOAL_STUDENT_.htm">Letter Download</a>

              <!-- 7 -->
              <p> Application Fee</p>
              <div class="recruitment-content" v-html="this.news.seven"></div>
              <!-- 8 -->
              <p>Initial Round of Selection</p>
              <div class="recruitment-content" v-html="this.news.eight"></div>
              <!-- 9 -->
              <p>Online Interview</p>
              <div class="recruitment-content" v-html="this.news.nine"></div>
              <!-- 10 -->
              <p>Admission</p>
              <div class="recruitment-content" v-html="this.news.ten"></div>
              <!-- 11 -->
              <p>Registration</p>
              <div class="recruitment-content" v-html="this.news.tone"></div>
              <!-- 12 -->
              <p>Fees and Scholarships</p>
              <div class="recruitment-content" v-html="this.news.ttwo"></div>
              <!-- 13 -->
              <p>Degree</p>
              <div class="recruitment-content" v-html="this.news.tthree"></div>
              <!-- 14 -->
              <p>If the country introduces a new postgraduate enrollment policy in 2019, our university will make corresponding adjustments and will make timely announcements</p>
            </div>
          </div>
          <div style="text-align:center;margin-top:30px;">
            <el-button @click="navigat()" type="primary" style="width:150px">I'm Read</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.div{

}
</style>
<style lang="stylus" scoped>
.ALM_content_right{
  font-family: "Helvetica Neue"
  padding-bottom:30px;
  .recruitment-title{
    margin-top:20px;
    color #727171;
    line-height: 30px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1px;
    text-align: center;
  }
  .recruitment-data{
    text-align: center;
    margin-top: 8px;
    color:#606266;
    letter-spacing: 2px;
    font-size:14px;
    margin-bottom: 20px;
  }
  .recruitment-all-content{
    padding-left: 30px;
    .recruitment-title-samll{
      p{
        /* position: relative; */
        color #2f88ee
        font-size:20px;
        letter-spacing: 1px;
        margin-top: 25px;
        margin-bottom: 15px;
        /* margin-left:8px; */
        counter-increment: numberP;
        line-height: 22px;
      }
      p:before{
        content: counter(numberP,upper-roman);
        /* position: absolute; */
        top: 2px;
        font-size:20px;
        margin-right: 5px;
        color: #2f88ee;
      }
      .recruitment-content{
        width:96%;
        color #727171
        /* word-wrap: break-word;
        word-break:break-all; */
        text-align: justify;
        line-height: 25px;
        font-size: 15px;
        letter-spacing: 1px;
        margin-bottom: 8px;
      }
      .recruitment-more{
        cursor pointer
        font-size:18px;
      }
    }
  }

}
</style>
<script>
import HomeHeader from '../home/components/Header.vue'
// @import '~styles/varibles.styl'
import {setCookie, getCookie} from '../../assets/js/cookie.js'
export default{
  components: {
    HomeHeader
  },
  data () {
    return {
      username: '',
      isApplication: 'false',
      news: {
        'title': '2019 Fall Term Recruitment Informationfor<br/> International Students in Beijing City University<br/>(Traditional Chinese Medicine in Master level)',
        'time': '2018-11-24',
        'first': 'Traditional Chinese Medicine in Master level.<br/>For more information on this program, please visit: ',
        'second': 'The program mode is full-time. The registration period of this program is 2 years.',
        'third': `(1) Applicants must be citizens of the countries along the Belt and Road (see attachment I ), other than Chinese nationality, aged between 18 and 45 years old (born on and after January 1, 1974)，with valid foreign passports. Good health, good conduct, compliance with Chinese government laws, regulations and school rules and regulations.
        <br/>(2) To apply for a master's degree, you must have a bachelor's degree and the bachelor's degree should be recognized by the granting country.
        <br/>(3) Applicants' academic performance, academic level and language proficiency must meet the entry requirements of the program.
        `,
        'forth': 'Deadline of Application: December 31, 2018.<br />Submission: Please access to BCU Application online system to complete the application',
        'five': 'See the note for detailed application procedures in the attachment II.',
        'six': `(1) Academic background: related majors in medicine, pharmaceutical sciences biotechnology, food science, health, life sciences, etc
        <br/>(2) Degree Certificate and Transcript:
        A. Original degree certificate and graduation certificate or certified copies either in Chinese or English. (Students expecting to graduate should provide an official letter stating expected graduation date)
        B. Official transcripts of your academic achievement up to the present, including courses taken and standard achieved, must be original documents or certified copies either in Chinese or English.
        <br/>(3) Two recommendation letters from your referees.
        The referees should be professors or persons with relevant academic title. At least one of them should have knowledge of your recent academic work. The recommendation letter must be original signed documents either in Chinese or English. The format of the reference letters can be downloaded
        <br/>(4) Language (English) test transcript
        Applicants are required to submit TOEFL transcript with 65 points or higher OR IELTS transcript with band 5.5 or higher to prove their English proficiency
        <br/>(5) Photocopy of your valid ordinary passport
        <br/>(6) One or two Academic publications (including table of contents and abstracts) or any other original achievements in your field (if applicable) (English or Chiense translation should be provided if the original documents are in other language.)
        <br/>(7) Non-criminal Background Check in English or Chinese
        <br/>(8) Physical Examination within past 6 months in English or Chinese
        <br/>(9) Screenshot of the online psychological assessment ending page (showing the end of the assessment)
        <br/>(10) Photocopy of the application fee payment voucher in English or Chinese
        `,
        'seven': `Payment method:
        <br/>1. Application fee amount: 800 yuan
        <br/>2. Only accept telegraphic transfer
        <br/>3. Payment Currency: RMB or USD (other currency is not accepted )
        <br/>4. Please leave a note when making a payment: Name +TCM
        <br/>5. Detailed remittance account information can be found in the attachment.
        `,
        'eight': 'Application materials will be reviewed by the International Students Office. Then, the International Students Office organizes a professional expert team to consider all the application materials on the academic background, research interests, academic performance, morality and development potential in the applied professional field. Applicants who have participated in the interview of the department will receive an interview notice, and the specific time will be determined by the department.',
        'nine': `The professional expert team will conduct a comprehensive assessment on the professional level and language ability of the candidates who participated in the online interview during the period from March to April 2019.
          Candidates who participate in the interview should report to the professional expert team, including introduction of personal scientific research experience, explanation of their understanding on the academic area, and achievements of their research.
          According to the results of the interview, the professional expert team combines the results of the initial round of selection and online interview, comprehensively assesses the candidate's ability, selects outstanding examiners, and drafts the admission list to the graduate school.
          `,
        'ten': `(1). According to the result and the draft admission list made by the professional expert team, the graduate school will confirm the final admission list. The International Students Office will announce the final admission list on the website：http://www.bcu.edu.cn/bjxy/index.htm
        <br/>(2). The International Student Office will post the admission notice, visa application form and other necessary documents from May to June, 2019.
        `,
        'tone': 'Freshmen will be enrolled in the beginning of September 2019, and specific time will be subject to the admission notice. Admitted students must go to Beijing City University for admission and registration in strict accordance with the time specified in the admission notice.',
        'ttwo': `(1). Tuition fee
          Master's degree: 30,000 yuan / academic year;
          <br/>(2). Accommodation fees
          3,500 yuan / year for a room with 3 students
          <br/>(3). Scholarships
          According to the foreign language scores (English and Chinese), professional performance, personal achievements, interview results and other factors, our school will select 9 international students ranked from the first to the ninth to waive the tuition and accommodation fee; 6 international students who ranked from tenth to the fifteenth will be exempt from accommodation fee.
          `,
        'tthree': `Students are required to complete all course work with qualified marks, a master’s thesis and a thesis defense within the registered time period. After meeting the above requirements and with the approval of University Degree Committee, the degree will be awarded.`
      }
    }
  },
  props: {
  },
  mounted () {
    let uname = getCookie('username')
    this.username = uname
    if (uname == '') {
      this.$router.push('/')
    }
    // let reg = new RegExp('\n', 'g')
    // let str = result.data.replace(reg, '<br>')
    // this.news.title = str
    console.log(uname)
  },
  methods: {
    Trim (str) { // str表示要转换的字符串
      return str.replace(/\n|\r\n/g, '<br/>')
    },
    navigat () {
      this.$router.push('/home')
    }
  }
}
</script>
