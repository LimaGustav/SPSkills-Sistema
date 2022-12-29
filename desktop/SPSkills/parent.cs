using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Text;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SPSkills
{
    public partial class parent : Form
    {
        public parent()
        {
            InitializeComponent();
        }

        private void parent_Load(object sender, EventArgs e)
        {
            PutStyle(panel1);
        }

        private void PutStyle(Control panel1)
        {
            foreach (Control control in panel1.Controls)
            {
                if (control is Label label)
                {
                    PrivateFontCollection pfc = new PrivateFontCollection();
                    pfc.AddFontFile($"{AppDomain.CurrentDomain.BaseDirectory}TitilliumWeb-Regular.ttf");
                    label.Font = new Font(pfc.Families[0], label.Font.Size, FontStyle.Regular);
                }
                if (control is PictureBox pb)
                {
                    pb.BackColor = Color.Transparent;
                    pb.SizeMode = PictureBoxSizeMode.Zoom;
                }
            }
        }
    }
}
