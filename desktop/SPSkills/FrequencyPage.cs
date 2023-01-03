using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SPSkills
{
    public partial class FrequencyPage : parent
    {
        public FrequencyPage()
        {
            InitializeComponent();

        }

        private void FrequencyPage_Load(object sender, EventArgs e)
        {
            panel1.BackgroundImage = Image.FromFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets/BackGround.png");
        }
    }
}
