// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    medicare:[
      {
        value:'城镇居民医保'
      },
      {
        value:'农村医保'
      },
      {
        value:'没有医保'
      }
    ],
    diabetes:[
      {
        value:'没有病史',

      },
      {
        value: '1年',

      },
      {
        value: '2年',

      },
      {
        value: '3年',

      },
      {
        value: '4年',

      },
      {
        value: '5年以上',

      }

    ],
    hypertensions:[
      {
        value: '没有病史',

      },
      {
        value: '1年',

      },
      {
        value: '2年',

      },
      {
        value: '3年',

      },
      {
        value: '4年',

      },
      {
        value: '5年以上',

      }
    ],
    selectedMedicareIndex:-1,
    selectedHospitalIndex:-1,
    selectedDiabeteIndex:-1,
    selectedhypertensionIndex:-1,
    

    hospitals:[
      {
        value:'九龙医院'
      },
      {
        value:'交通大学附属医院'
      }
    ]
  
  },
  bindMedicareChange:function(e){
    this.setData({
      selectedMedicareIndex:e.detail.value   
    })
  },
  bindHospitalChange:function(e){
    this.setData({
      selectedHospitalIndex: e.detail.value
    })
  },
  bindDiabeteChange: function (e) {
    this.setData({
      selectedDiabeteIndex: e.detail.value
    })
  },
  bindHypertensionChange: function (e) {
    this.setData({
      selectedHypertensionIndex: e.detail.value
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})