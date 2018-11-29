<template>
  <div>
    <div class="Info_1_border">
      <p style="letter-spacing:1px;" class="see-title">个人信息:Personal Information</p>
      <div class="Info_1_form">
        <el-form :model="PersonalForm" :rules="rules" ref="PersonalForm" label-width="170px" class="demo-PersonalForm" label-position="left">
          <!-- 姓名 -->
          <p>护照用名/Passport Name:</p>
          <el-form-item label="姓/Family Name" prop="family_name" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.family_name" clearable class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="名/Given Name" prop="given_name" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.given_name" clearable  class="el-in-left"></el-input >
          </el-form-item>
          <p class="score-split"></p>
          <!-- 国家 -->
          <el-form-item label="国籍/Nationality" prop="nationality" >
            <el-autocomplete :disabled="eqit" :disabled="eqit" :fetch-suggestions="countrySearch" v-model="PersonalForm.nationality" placeholder="请选择或填写国籍/Please Choose or Input your Nationality" clearable class="el-in-nomal">
            </el-autocomplete>
          </el-form-item>
          <!-- 护照号码-->
          <el-form-item label="护照号码/Passport No" prop="passport_no" >
            <el-input :disabled="eqit" v-model="PersonalForm.passport_no" clearable class="el-in-nomal"></el-input >
          </el-form-item>
          <p class="score-split"></p>
          <!-- 出生日期 -->
          <el-form-item label="出生日期/Date of Birth" prop="date_birth">
            <el-date-picker :disabled="eqit" value-format="yyyyMMdd" type="date" placeholder="选择日期 Select Date" v-model="PersonalForm.date_birth" class="el-in-nomal"></el-date-picker>
          </el-form-item>
          <!-- 出生地点 -->
          <p>出生地点/Place of Birth</p>
          <el-form-item label="国家/Country" prop="Country" class="el_left">
            <el-autocomplete :disabled="eqit" :fetch-suggestions="countrySearch" v-model="PersonalForm.Country" placeholder="请选择或填写国家/Please Choose or Input your Country" clearable class="el-in-left">
            </el-autocomplete>
          </el-form-item>
          <el-form-item label="城市/City" prop="City" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.City" clearable class="el-in-left"></el-input >
          </el-form-item>
          <p class="score-split"></p>
          <!-- 性别 -->
          <el-form-item label="性别/Gender " prop="sex">
            <el-radio-group :disabled="eqit" v-model="PersonalForm.sex">
              <el-radio label="0" value='0'>男/Male</el-radio>
              <el-radio label="1" value='1'>女/Female</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 婚姻状况Marital Status -->
          <el-form-item label="婚姻状况/Marital Status" prop="marri">
            <el-radio-group :disabled="eqit" v-model="PersonalForm.marri">
              <el-radio label="0" value="0">已婚/Married</el-radio>
              <el-radio label="1" value="1">未婚/Single</el-radio>
              <el-radio label="2" value="2">其它/Other</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="宗教信仰/Religion" prop="religion">
              <el-autocomplete :disabled="eqit" :fetch-suggestions="querySearch" v-model="PersonalForm.religion" placeholder="请选择或填写宗教信仰/Please Choose or Input your religion" class="el-in-nomal">
            </el-autocomplete>
          </el-form-item>
          <p class="score-split"></p>
          <p>录取通知书邮寄地址/Address for correspondence (Please inform  BCU for any change of this address)</p>
          <el-form-item label="地址/Address" prop="address_c" class="el_left" >
            <el-input :disabled="eqit" v-model="PersonalForm.address_c" clearable class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="电话/Tel" prop="ctel" class="el_left">
            <el-input :disabled="eqit" v-model.number="PersonalForm.ctel" clearable  class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="传真/Fax" prop="cfax" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.cfax" clearable class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="E-mail" prop="cmail" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.cmail" clearable class="el-in-left"></el-input >
          </el-form-item>
          <p class="score-split"></p>
          <p>家庭地址/Home Address</p>
          <el-form-item label="地址/Home Address" prop="address_h" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.address_h" clearable class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="电话/Tel" prop="htel" class="el_left">
            <el-input :disabled="eqit" v-model.number="PersonalForm.htel" clearable class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="传真/Fax" prop="hfax" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.hfax" clearable  class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="E-mail" prop="hmail" class="el_left">
            <el-input :disabled="eqit" v-model="PersonalForm.hmail" clearable class="el-in-left"></el-input >
          </el-form-item>
        </el-form>
      </div>
      <p style="letter-spacing:1px; margin-top:28px" class="see-title">学习经历: Education History</p>
      <div class="Info_1_form">
        <el-form label-position="top" :inline="true" :model="EducationForm" ref="EducationForm" label-width="100px" class="demo-dynamic">
        <div class="EducationForm_border_this" v-for='(item, index) in EducationForm.domains' :key="item.key">
          <el-form-item label="学习时间/Education Years Attended" >
            <el-col :span="11">
              <el-form-item :prop="'domains.'+index+'.fromdate'">
                  <el-date-picker :disabled="eqit" value-format="yyyyMM" type="month" placeholder="from" v-model="item.fromdate" style="width: 115px;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="11" style="margin-left:5px;">
              <el-form-item :prop="'domains.'+index+'.todate'">
                <el-date-picker :disabled="eqit" value-format="yyyyMM" type="month" placeholder="to" v-model="item.todate" style="width: 115px;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="单位/Previous and Current Education & Employer"
          :prop="'domains.'+index+'.Previous'" class="">
            <el-input :disabled="eqit" v-model="item.Previous" clearable style="width:320px;" class=""></el-input >
          </el-form-item>
          <el-form-item label="主修专业/Fields of Study" :prop="'domains.'+index+'.Fields'" style="margin-left:5px">
            <el-input :disabled="eqit" v-model="item.Fields" clearable style="width:160px;" class=""></el-input >
          </el-form-item>
        </div>
        </el-form>
      </div>
      <p style="letter-spacing:1px; margin-top:28px" class="see-title">工作经历:Working Experience:</p>
      <div class="Info_1_form">
        <el-form label-position="top" :inline="true" :model="WorkForm" ref="WorkForm" label-width="100px" class="demo-dynamic">
        <div class="WorkForm_border" v-for='(item, index) in WorkForm.domains' :key="item.key">
          <el-form-item label="工作时间/Working Years Attended" >
            <el-col :span="11">
              <el-form-item :prop="'domains.'+index+'.btime'">
                  <el-date-picker :disabled="eqit" value-format="yyyyMM" type="month" placeholder="from" v-model="item.btime" style="width: 115px;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="11" style="margin-left:5px;">
              <el-form-item :prop="'domains.'+index+'.ltime'">
                <el-date-picker :disabled="eqit" value-format="yyyyMM" type="month" placeholder="to" v-model="item.ltime" style="width: 115px;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="单位/Previous and Current Education & Employer"
          :prop="'domains.'+index+'.unit'" class="">
            <el-input :disabled="eqit" v-model="item.unit" clearable style="width:320px;" class=""></el-input >
          </el-form-item>
         <el-form-item label="职位/Position/Duty" :prop="'domains.'+index+'.obj'" style="margin-left:5px">
            <el-input :disabled="eqit" v-model="item.obj" clearable style="width:160px;" class="el-in-left-more"></el-input >
          </el-form-item>
        </div>
        </el-form>
      </div>
      <p style="letter-spacing:1px; margin-top:28px" class="see-title">语言能力:Language Skill </p>
      <div class="Info_1_form">
        <el-form :model="LanguageForm" :rules="rules" ref="LanguageForm" label-width="200px" class="demo-LanguageForm" label-position="left">
          <!-- 姓名 -->
          <el-form-item label="汉语能力/Chinese Proficiency:" prop="proficiency_c">
              <el-radio-group :disabled="eqit" v-model="LanguageForm.proficiency_c">
                <el-radio label="1" value='1'>很好/Excellent</el-radio>
                <el-radio label="2" value='2'>好/Good</el-radio>
                <el-radio label="3" value='3'>较好/Fair</el-radio>
                <el-radio label="4" value-'4'>差/Poor</el-radio>
                <el-radio label="5" value='5'>不会/None</el-radio>
              </el-radio-group>
          </el-form-item>
          <p> HSK 考试等级或其他类型汉语考试成绩/ Level of HSK test or other certificates that can testify your</p>
          <el-form-item label="考试成绩/Test Scores" prop="level_c" class="el_left">
            <el-input :disabled="eqit" v-model.number="LanguageForm.level_c" clearable style="width:250px;" class="el-in-left el_left"></el-input >
          </el-form-item>
          <p class="score-split"></p>
          <el-form-item label="英语能力/English Proficiency:" prop="proficiency_e">
              <el-radio-group :disabled="eqit" v-model="LanguageForm.proficiency_e">
              <el-radio label="1" value='1'>很好/Excellent</el-radio>
              <el-radio label="2" value='2'>好/Good</el-radio>
              <el-radio label="3" value='3'>较好/Fair</el-radio>
              <el-radio label="4" value-'4'>差/Poor</el-radio>
              <el-radio label="5" value='5'>不会/None</el-radio>
              </el-radio-group>
          </el-form-item>
          <p>TOEFL或ILETS 考试成绩/ TOEFL or ILETS test score</p>
          <el-form-item label="考试成绩/Test Scores" prop="level_e" class="el_left">
            <el-input :disabled="eqit" v-model.number="LanguageForm.level_e" clearable style="width:250px;" class="el-in-left el_left"></el-input >
          </el-form-item>
        </el-form>
      </div>
      <p style="letter-spacing:1px; margin-top:28px" class="see-title">来华学习计划:Proposed Study in BCU </p>
      <div class="Info_1_form">
        <el-form :model="StudyForm" :rules="rules" ref="StudyForm" label-width="200px" class="demo-StudyForm" label-position="top">
        <p>来华学习计划/Proposed Study in BCU:</p>
          <!-- 姓名 -->
          <el-form-item label="学位/Study in BCU:" prop="degree" class="el_left">
              <el-radio-group :disabled="eqit" v-model="StudyForm.degree" style="line-height:35px;">
                <el-radio label="1" value="1" >本科生/Bachelor’s Degree degree</el-radio>
                <el-radio label="2" value="2" >硕士研究生/Master’s Degree degree</el-radio>
                <el-radio label="3" value="3">博士研究生/Doctor’s Degree degree</el-radio>
                <el-radio label="4" value="4">研究学者/Research Scholar</el-radio>
                <el-radio label="5" value="5">高级进修生/Senior Scholar</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="申请来华学习专业或研究专题/subject Subject or Field of Study in China" prop="subject" class="el_left">
            <el-select :disabled="eqit" v-model="StudyForm.subject" style="width:300px;" class="el-in-left el_left">
              <el-option  label="中医药专业Traditional Chinese Medicine" value="medicine">中医药专业 Traditional Chinese Medicine</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="申请专业学习时间/Duration of the subject Study:" class="el_left" required >
            <el-col :span="5">
              <el-select :disabled="eqit" v-model="StudyForm.ym_f" style="width:150px;" class="el-in-left el_left">
                <el-option label="2018-09" value="201809">2018-07</el-option>
              </el-select>
            </el-col>
            <el-col :span="5" >
              <el-select :disabled="eqit" v-model="StudyForm.ym_l" style="width:150px; margin-left:10px" class="el-in-left el_left">
                <el-option label="2019-07" value="201907">2019-07</el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <p>拟在华学习或研究的详细内容（可另附纸）/ Please Describe the details of your Study or Research Plan in China  (can be attached if this space is not enough)</p>
          <el-form-item label="详细内容/Study details" prop="details" class="el_left">
            <el-input :disabled="eqit" style="width:650px"
            maxlength=2000
            type="textarea" :autosize="{ minRows: 8}"placeholder="请输入内容/Please fill details"
            v-model="StudyForm.details">
            </el-input >
          </el-form-item>
        </el-form>
      </div>
      <p style="letter-spacing:1px; margin-top:28px" class="see-title">曾发表的主要学术论文、著作及作品:Academic Papers, Writing & Art Works Published</p>
      <div class="Info_1_form">
        <el-form label-position="top" :inline="true" :model="Achievements" ref="Achievements" label-width="100px" class="demo-dynamic">
        <div class="Achievements_border" v-for='(item, index) in Achievements.domains' :key="item.key">
          <el-form-item label="论文题目/Topic"
          :prop="'domains.'+index+'.papers'" class="">
            <el-input :disabled="eqit" v-model="item.papers" clearable style="width:320px;" class="el-in-left"></el-input >
          </el-form-item>
          <el-form-item label="发表时间/Published Date" style="margin-left:10px">
              <el-form-item :prop="'domains.'+index+'.time'">
                  <el-date-picker :disabled="eqit" value-format="yyyyMM"  type="month" placeholder="from" v-model="item.time" style="width: 275px;"></el-date-picker>
              </el-form-item>
          </el-form-item>
        </div>
        </el-form>
      </div>
      <p style="letter-spacing:1px; margin-top:28px" class="see-title">其他信息:Other Information </p>
      <div class="Info_1_form">
        <el-form :show-message="false" :model="OtherInformation" :rules="rules" ref="OtherInformation" label-width="170px" class="demo-OtherInformation" label-position="top">
          <p>申请人在华事务担保人或机构/The Emergency Contact (Chinese or Foreigner) During Your Study in China:</p>
          <!-- <p class="score-split"></p> -->
           <el-form-item label="名称/Name" prop="name" class="el_left" required>
            <el-input :disabled="eqit" v-model="OtherInformation.name" clearable style="width:400px" class="el_left"></el-input >
          </el-form-item>
          <el-form-item label="电话/Tel" prop="tel" class="el_left">
            <el-input :disabled="eqit" v-model.number="OtherInformation.tel" clearable style="width:400px" class="el_left"></el-input >
          </el-form-item>
          <el-form-item label="邮箱/E-mail" prop="fax" class="el_left">
            <el-input :disabled="eqit" v-model="OtherInformation.fax" clearable style="width:400px" class="el_left"></el-input >
          </el-form-item>
          <el-form-item label="地址/Address" prop="address" class="el_left" >
            <el-input :disabled="eqit" v-model="OtherInformation.address" clearable style="width:400px" class="el_left"></el-input >
          </el-form-item>
          <p class="score-split"></p>
          <p>申请人亲属情况/Family Members of the Applicants:</p>
          <!-- <p>父亲/Father</p> -->
          <el-form-item label="父亲/Father:" class="el_left"  required>
            <el-col :span="4">
              <el-form-item label="姓名/Name" prop="Family[0].FatherName" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[0].FatherName" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="5" >
              <el-form-item label="职业/Employment" prop="Family[0].FatherEmployment" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[0].FatherEmployment" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6" >
              <el-form-item label="电话/Telephone Number" prop="Family[0].FatherNumber" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[0].FatherNumber" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6.5" >
              <el-form-item label="邮箱/E-mail" prop="Family[0].Fathermail" class="el_left" required
              :rules="{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }">
                <el-input :disabled="eqit" v-model="OtherInformation.Family[0].Fathermail" clearable class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- <p>母亲/Mother</p> -->
          <el-form-item label="母亲/Mother:" class="el_left"  required>
            <el-col :span="4">
              <el-form-item label="姓名/Name" prop="Family[1].MotherName" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[1].MotherName" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="5" >
              <el-form-item label="职业/Employment" prop="Family[1].MotherEmployment" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[1].MotherEmployment" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6" >
              <el-form-item label="电话/Telephone Number" prop="Family[1].MotherNumber" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[1].MotherNumber" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6.5" >
              <el-form-item label="邮箱/E-mail" prop="Family[1].Mothermail"
              class="el_left" required
              :rules="{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }">
                <el-input :disabled="eqit" v-model="OtherInformation.Family[1].Mothermail" clearable class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="配偶/Spouse:" class="el_left"  required>
            <el-col :span="4">
              <el-form-item label="姓名/Name" prop="Family[2].SpouseName" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[2].SpouseName" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="5" >
              <el-form-item label="职业/Employment" prop="Family[2].SpouseEmployment" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[2].SpouseEmployment" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6" >
              <el-form-item label="电话/Telephone Number" prop="Family[2].SpouseNumber" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[2].SpouseNumber" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6.5" >
              <el-form-item label="邮箱/E-mail" prop="Family[2].Spousemail"
              class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[2].Spousemail" clearable class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
          </el-form-item>
          <!-- <p>子女/Daughter</p> -->
          <el-form-item label="子女/Daughter:" class="el_left"  required>
            <el-col :span="4">
              <el-form-item label="姓名/Name" prop="Family[3].DaughterName" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[3].DaughterName" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="5" >
              <el-form-item label="职业/Employment" prop="Family[3].DaughterEmployment" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[3].DaughterEmployment" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6" >
              <el-form-item label="电话/Telephone Number" prop="Family[3].DaughterNumber" class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[3].DaughterNumber" clearable  class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
            <el-col :span="6.5" >
              <el-form-item label="邮箱/E-mail" prop="Family[3].Daughtermail"
              class="el_left" required>
                <el-input :disabled="eqit" v-model="OtherInformation.Family[3].Daughtermail" clearable class="el-in-left"></el-input >
              </el-form-item>
            </el-col>
          </el-form-item>
          </el-form>
        </el-form>
      </div>
      <p style="letter-spacing:1px;margin-top:28px" class="see-title">申请材料:Application Documents </p>
      <!-- 1 -->
      <div class="Upload_layout">
        <el-col :span="20">
            <p class="select_star">证件照/ The passport photo.</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[1]}}</el-col>
      </div>
      <!-- 2 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">护照信息页/ The information page of the Applicant’s Passport</p>
        </el-col>
        <el-col :span="8" class="isupload2">{{UploadfileList[2]}}</el-col>
      </div>
      <!-- 3 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">担保人有效证件的复印件/ A photocopy of an ID (can be a passport, license, or other official ID) of the applicant’s emergency contact. </p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[3]}}</el-col>
      </div>
      <!-- 4 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">本人最后学历成绩单复印件/ Transcripts of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[4]}}</el-col>
      </div>
      <!-- 5 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">本人最后学历证书复印件/ Diploma of the Most Advanced Studies.</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[5]}}</el-col>
      </div>
      <!-- 6 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">推荐信1/Two Letters of Recommendation.</p>
        </el-col>
        <el-col :span="8" class="isupload6">{{UploadfileList[6]}}</el-col>
      </div>
      <!-- 13 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">推荐信2/Two Letters of Recommendation.</p>
        </el-col>
        <el-col :span="8" class="isupload13">{{UploadfileList[13]}}</el-col>
      </div>
      <!-- 7-->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">雅思或托福成绩证书复印件/ A photocopy of ILETS OR TOEFL certificate.</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[7]}}</el-col>
      </div>
      <!-- 8-->
      <div class="Upload_layout">
        <el-col :span="20">
          <p>HSK证书复印件/ A photocopy of HSK certificate.</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[8]}}</el-col>
      </div>
      <!-- 9 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p>来华学习计划/ Study Plan in China</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[9]}}</el-col>
      </div>
      <!-- 10 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p>发表文章或科研成果/ Published Article or Research Achievements </p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[10]}}</el-col>
      </div>
      <!-- 11 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">无犯罪证明/ No crime certificate</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[11]}}</el-col>
      </div>
      <!-- 12 -->
      <div class="Upload_layout">
        <el-col :span="20">
          <p class="select_star">近6个月内的体检报告/ Physical Examination in the past 6 months.</p>
        </el-col>
        <el-col :span="8" class="isupload1">{{UploadfileList[12]}}</el-col>
      </div>

    </div>
    <div class="announcement_button_submit">
      <!-- <el-button @click="resetForm('OtherInformation')">重置 Reset</el-button> -->
      <el-button type="primary" @click="submitAll()" style="margin-left:50px;" :disabled="submiteqit">提交 Submit</el-button>
    </div>
  </div>
</template>
<script>
import {setCookie, getCookie} from '../../../assets/js/cookie.js'
export default{
  name: 'Information_10_Submission',
  data () {
    return {
      // readonly: true,
      eqit: true,
      submiteqit: true,
      username: '',
      // 个人经历
      PersonalForm: {
        pic: '',
        passport_name: '',
        family_name: '', // 姓
        given_name: '', // 名
        nationality: '', // 国籍
        date_birth: '',
        passport_no: '',
        Country: '',
        City: '',
        sex: '',
        marri: '',
        religion: '',
        address_c: '',
        ctel: '',
        cfax: '',
        cmail: '',
        address_h: '',
        htel: '',
        hfax: '',
        hmail: '',
        religions: [],
        countries: []
      },
      // 学习经历
      EducationForm: {
        domains: [{
          key: 0,
          fromdate: '',
          todate: '',
          Previous: '',
          Fields: ''
        }]
      },
      // 工作经历
      WorkForm: {
        domains: [{
          unit: '',
          btime: '',
          ltime: '',
          obj: '',
          key: 0
        }]
      },
      // 语言能力
      LanguageForm: {
        proficiency_c: '', // 汉语能力
        level_c: '',
        proficiency_e: '', // 英语能力
        level_e: '',
        type: 1
      },
      StudyForm: {
        degree: '',
        subject: '',
        ym_f: '',
        ym_l: '',
        details: '',
        type: 1
      },
      Achievements: {
        domains: [{
          key: 0,
          papers: '',
          time: ''
        }]
      },
      OtherInformation: {
        name: '',
        tel: '',
        fax: '',
        address: '',
        type: 1,
        Family: [{
          'FatherName': '', 'FatherNumber': '', 'FatherEmployment': '', 'Fathermail': ''
        }, {
          'MotherName': '', 'MotherNumber': '', 'MotherEmployment': '', 'Mothermail': ''
        }, {
          'SpouseName': '', 'SpouseNumber': '', 'SpouseEmployment': '', 'Spousemail': ''
        }, {
          'DaughterName': '', 'DaughterNumber': '', 'DaughterEmployment': '', 'Daughtermail': ''
        }]
      },
      options: [
        {
          value: 'HSK',
          label: 'HSK',
          children: [{
            value: '1',
            label: '1'
          }, {
            value: '2',
            label: '2'
          }, {
            value: '3',
            label: '3'
          }, {
            value: '4',
            label: '4'
          }, {
            value: '5',
            label: '5'
          }, {
            value: '',
            label: '6'
          }]
        }, {
          value: 'none',
          label: '无/None'
        }
      ],
      UploadfileList: [],
      NeedInput: this.GLOBAL.NeedInput,
      NeedUrl: this.GLOBAL.NeedUrl
    }
  },
  created: function () {
    let uname = getCookie('username')
    if (uname == '') {
      this.$router.push('/')
    }
    this.username = uname
    for (let i = 1; i < 15; i++) {
      this.UploadfileList[i] = '已上传'
    }
    // 获取文件
    this.$axios({
      method: 'get',
      url: this.$URL + '/ChackUploadAllServlet',
      params: {
        username: this.username
      }
    }).then((response) => {
      console.log(response.data + '文件或渠道')
      if (parseInt(response.data) != 0) {
        let nofile = response.data.toString().split('/')
        for (let j = 1; j <= this.UploadfileList.length; j++) {
          this.UploadfileList[parseInt(nofile[j])] = '未上传'
        }
        console.log(this.UploadfileList)
      }
      console.log(response.data)
    })
    // 获取值并判断是否进入
    this.$axios({
      method: 'get',
      url: this.$URL + '/GetAllInfServlet',
      params: {
        username: this.username,
        typ: '10'
      }
    }).then((response) => {
      if (response.data.Contact[0].username == '') {
        let isShow = getCookie('InputInfo')
        if (isShow == '') {
          this.$axios({
            method: 'get',
            url: this.$URL + '/SeletWckServlet',
            params: {
              username: this.username
            }
          }).then((response) => {
            isShow = parseInt(response.data[0].typ)
            if (isShow < 9) {
              this.$alert(this.NeedInput[isShow], {
                confirmButtonText: 'sure'
              })
              this.$router.push('/asidetab/' + this.NeedUrl[isShow])
            } else if (isShow == 15) {
              this.submiteqit = true
            }
            setCookie('InputInfo', isShow, 1000 * 60)
          })
        } else {
          if (isShow < 9) {
            this.$alert(this.NeedInput[isShow], {
              confirmButtonText: 'sure'
            })
            this.$router.push('/asidetab/' + this.NeedUrl[isShow])
          } else if (isShow == 15) {
            this.submiteqit = true
          }
        }
      } else {
        let Personalget = response.data.Pinf[0]
        this.PersonalForm.pic = Personalget.pic
        this.PersonalForm.passport_name = Personalget.passportName
        this.PersonalForm.family_name = Personalget.familyName
        this.PersonalForm.given_name = Personalget.givenName
        this.PersonalForm.nationality = Personalget.nationality
        this.PersonalForm.date_birth = Personalget.dateBirth
        this.PersonalForm.passport_no = Personalget.passportNo
        let place = Personalget.placeBirth.split('/')
        this.PersonalForm.Country = place[0]
        this.PersonalForm.City = place[1]
        this.PersonalForm.sex = Personalget.sex
        this.PersonalForm.marri = Personalget.marri
        this.PersonalForm.religion = Personalget.religion
        this.PersonalForm.address_c = Personalget.addressC
        this.PersonalForm.ctel = parseInt(Personalget.ctel)
        this.PersonalForm.cfax = Personalget.cfax
        this.PersonalForm.cmail = Personalget.cmail
        this.PersonalForm.address_h = Personalget.addressH
        this.PersonalForm.htel = parseInt(Personalget.htel)
        this.PersonalForm.hfax = Personalget.hfax
        this.PersonalForm.hmail = Personalget.hmail
        // 2
        this.EducationForm.domains = response.data.Study
        for (let i = 0; i < this.EducationForm.domains.length; i++) {
          this.EducationForm.domains[i].fromdate = this.EducationForm.domains[i].btime
          this.EducationForm.domains[i].todate = this.EducationForm.domains[i].ltime
          this.EducationForm.domains[i].Previous = this.EducationForm.domains[i].unit
          this.EducationForm.domains[i].Fields = this.EducationForm.domains[i].obj
        }
        // 3
        this.WorkForm.domains = response.data.work
        for (let i = 0; i < this.WorkForm.domains.length; i++) {
          this.WorkForm.domains[i].btime = this.WorkForm.domains[i].btime
          this.WorkForm.domains[i].ltime = this.WorkForm.domains[i].ltime
          this.WorkForm.domains[i].unit = this.WorkForm.domains[i].unit
          this.WorkForm.domains[i].obj = this.WorkForm.domains[i].obj
        }
        // 4
        let profiGet = response.data.Proficiency[0]
        let level_c_return = profiGet.level_c
        this.LanguageForm.proficiency_c = profiGet.proficiency_c
        this.LanguageForm.level_c = level_c_return
        this.LanguageForm.proficiency_e = profiGet.proficiency_e
        this.LanguageForm.level_e = profiGet.level_e
        // 5
        let proGet = response.data.Proposed[0]
        this.StudyForm.degree = proGet.degree
        this.StudyForm.details = proGet.details
        this.StudyForm.subject = '中医药专业Traditional Chinese Medicine'
        this.StudyForm.ym_f = proGet.ym_f
        this.StudyForm.ym_l = proGet.ym_l
        // 6
        this.Achievements.domains = response.data.Xs
        for (let i = 0; i < this.Achievements.domains.length; i++) {
          this.Achievements.domains[i].papers = this.Achievements.domains[i].papers
          this.Achievements.domains[i].time = this.Achievements.domains[i].time
        }
        // 7.1
        let OtherGet = response.data.Contact[0]
        this.OtherInformation.name = OtherGet.name
        this.OtherInformation.tel = parseInt(OtherGet.tel)
        this.OtherInformation.fax = OtherGet.fax
        this.OtherInformation.address = OtherGet.address
        // 7.2
        let FamilyGet = response.data.Family[0]
        this.OtherInformation.Family[0].FatherName = FamilyGet.Father[0].name
        this.OtherInformation.Family[0].FatherNumber = FamilyGet.Father[0].age
        this.OtherInformation.Family[0].FatherEmployment = FamilyGet.Father[0].employment
        this.OtherInformation.Family[0].Fathermail = FamilyGet.Father[0].tel
        this.OtherInformation.Family[1].MotherName = FamilyGet.Mother[0].name
        this.OtherInformation.Family[1].MotherNumber = FamilyGet.Mother[0].age
        this.OtherInformation.Family[1].MotherEmployment = FamilyGet.Mother[0].employment
        this.OtherInformation.Family[1].Mothermail = FamilyGet.Mother[0].tel
        this.OtherInformation.Family[2].SpouseName = FamilyGet.Spouse[0].name
        this.OtherInformation.Family[2].SpouseNumber = FamilyGet.Spouse[0].age
        this.OtherInformation.Family[2].SpouseEmployment = FamilyGet.Spouse[0].employment
        this.OtherInformation.Family[2].Spousemail = FamilyGet.Spouse[0].tel
        this.OtherInformation.Family[3].DaughterName = FamilyGet.Daughter[0].name
        this.OtherInformation.Family[3].DaughterNumber = FamilyGet.Daughter[0].age
        this.OtherInformation.Family[3].DaughterEmployment = FamilyGet.Daughter[0].employment
        this.OtherInformation.Family[3].Daughtermail = FamilyGet.Daughter[0].tel
        console.log(response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    submitAll () {
      // setCookie('InputInfo', 10, 1000 * 60)

      this.$alert('提交成功，请前往心理测评/Submit success ', {
        confirmButtonText: 'sure'
      }).then(() => {
        this.$router.push('/Psychological')
      }).catch(() => {
      })
    }
  }
}
</script>
<style>
.ss{
  /* font-size: 24;
  font-weight: 400; */
}
</style>
<style lang="stylus" scoped>
.EducationForm_border_this{
  margin-bottom:0px;
}
.Upload_layout{
  padding-left:40px;
  margin-top:40px;
  display: flex;
  justify-content:center;
  align-items:Center;
  p{
    color:#2F88EE;
    font-weight: bold;
  }
  .select_star{
    position: relative;
  }
  .select_star:before{
    content: '';
    background-repeat: no-repeat;
    background:url('~images/select_star.png');
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: -15px;
  }
}
.see-title{
  color black
  font-size: 28;
  font-weight: 600;
  text-align:center
}
.el-in-left-more{
  margin-left:0px;
}
.announcement_button_submit{
  margin-top:80px;
  margin-bottom:50px;
  width:100%
  text-align:center
}
</style>
