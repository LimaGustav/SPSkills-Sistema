using SPSkills.Models;
using SPSkills.Utils;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Entity.Core.Metadata.Edm;
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

            textBoxEmail.BackColor = Color.FromArgb(217, 217, 217);
            textBoxPassword.BackColor = Color.FromArgb(217, 217, 217);
            textBoxEmail.ForeColor = Color.Black;
            textBoxPassword.ForeColor = Color.Black;
            textBoxPassword.PasswordChar = true;
        }

        private void customButton1_MouseEnter(object sender, EventArgs e)
        {
            
        }

        private void customButton1_Click(object sender, EventArgs e)
        {
            var user = ctx.Users.Where(x => x.Email == textBoxEmail.Texts).FirstOrDefault();
            if (user == null)
            {
                "Email ou senha inválidos".Alert();
                return;
            }
           

            if (user.Password.Length < 32)
            {
                user.Password = Encript.GenerateHash(user.Password);
                ctx.Entry(user).CurrentValues.SetValues(user);
                ctx.SaveChanges();
            }

            bool comparado = Encript.ComparePassword(textBoxPassword.Texts, user.Password);


            if (comparado)
            {
                new FrequencyPage().Show();
                this.Hide();
            }
            else
            {
                "Email ou senha inválidos".Alert();
                return;
            }
          
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
