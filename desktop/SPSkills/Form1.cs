using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Text;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
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
            customPanel1.BackgroundColor = Color.FromArgb(60, 239, 239, 239);

            pictureBox3.Image = Image.FromFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets/LogoSenai.png");
            pictureBox2.Image = Image.FromFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets/LogoWordSkills.png");
            customButton1.BackgroundColor = ColorTranslator.FromHtml(Red);
            PrivateFontCollection pfc = new PrivateFontCollection();
            pfc.AddFontFile($"{AppDomain.CurrentDomain.BaseDirectory}Assets\\TitilliumWeb\\TitilliumWeb-Bold.ttf");
            customButton1.Font = new Font(pfc.Families[0], customButton1.Font.Size, FontStyle.Bold);

            customTextBox1.BackColor = Color.FromArgb(217, 217, 217);
            customTextBox2.BackColor = Color.FromArgb(217, 217, 217);
            customTextBox1.ForeColor = Color.Black;
            customTextBox2.ForeColor = Color.Black;
            customTextBox2.PasswordChar = true;
        }

        private void customButton1_MouseEnter(object sender, EventArgs e)
        {
            
        }

        private void customButton1_Click(object sender, EventArgs e)
        {
            new FrequencyPage().Show();
            this.Hide();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void pictureBox4_Click(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Minimized;
        }
    }
}
