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
    public partial class LoginPage : parent
    {
        public LoginPage()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            panel1.BackgroundImage = Image.FromFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets/BackGround.png");
            customPanel1.BackgroundColor = Color.FromArgb(100,0,0,0);

            pictureBox3.Image = Image.FromFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets/LogoSenai.png");
            pictureBox2.Image = Image.FromFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets/LogoWordSkills.png");
        }
    }
}
